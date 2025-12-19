import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import QuizCard from '../components/QuizCard';
import { QUIZ_CONFIG } from '../data/quizConfig';
import { contentLibrary } from '../data/contentLibrary';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFollowUp, setIsFollowUp] = useState(false);
    const [scores, setScores] = useState<number[]>([]);
    const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
    const [tagIds, setTagIds] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    // Email feature states
    const [email, setEmail] = useState('');
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const questions = QUIZ_CONFIG.questions;
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (value: string) => {
        if (!isFollowUp) {
            // Main question answer
            const option = currentQuestion.options.find(o => o.id === value);
            if (option) {
                setScores(prev => [...prev, option.score]);
                setAnswers(prev => ({ ...prev, [currentQuestion.id]: value as "A" | "B" | "C" | "D" }));

                // Check for follow-up
                if (currentQuestion.followUp && currentQuestion.followUp.whenOptionIds.includes(value as "C" | "D")) {
                    setIsFollowUp(true);
                    return;
                }
            }
        } else {
            // Follow-up answer
            const followUpOption = currentQuestion.followUp?.followUpQuestion.options.find(o => o.id === value);
            if (followUpOption) {
                setTagIds(prev => [...prev, value]);
            }
            setIsFollowUp(false);
        }

        // Advance to next main question or show result
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !storyData) return;

        setEmailStatus('sending');

        try {
            const response = await fetch('/api/send-zorgcheck.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    profile: storyData.profile.title,
                    paragraphs: storyData.paragraphs,
                    bullets: storyData.bullets,
                    closing: storyData.closing
                }),
            });

            if (response.ok) {
                setEmailStatus('success');
                setTimeout(() => {
                    setShowEmailForm(false);
                    setEmailStatus('idle');
                    setEmail('');
                }, 4000);
            } else {
                setEmailStatus('error');
            }
        } catch (error) {
            setEmailStatus('error');
        }
    };

    const storyData = useMemo(() => {
        if (!showResult) return null;

        const totalScore = scores.reduce((a, b) => a + b, 0);
        const avgScore = totalScore / questions.length;

        const profile = QUIZ_CONFIG.results.find(
            r => avgScore >= r.thresholds.avgMin && avgScore <= r.thresholds.avgMax
        ) || QUIZ_CONFIG.results[0];

        const ctx = {
            answers,
            tags: tagIds,
            avg: avgScore,
            profileId: profile.id as "light" | "practical" | "intensive" | "mantelzorg"
        };

        // Paragraph 1
        const p1Parts = [
            contentLibrary.openers[ctx.answers.q1 as "A" | "B" | "C" | "D"],
            contentLibrary.pressure[ctx.answers.q2 as "A" | "B" | "C" | "D"]
        ];

        const p1TagPriority = [
            { category: 'household', ids: ['behind_household', 'selfcare_household', 'structure_household'] },
            { category: 'admin', ids: ['behind_admin', 'structure_admin'] },
            { category: 'care', ids: ['behind_care'] },
            { category: 'self', ids: ['behind_self', 'selfcare_rest', 'selfcare_health', 'selfcare_social'] }
        ];

        let p1TagsAdded = 0;
        for (const priority of p1TagPriority) {
            const foundTagId = ctx.tags.find(t => priority.ids.includes(t));
            if (foundTagId && p1TagsAdded < 2) {
                p1Parts.push(contentLibrary.tagLines[foundTagId as keyof typeof contentLibrary.tagLines]);
                p1TagsAdded++;
            }
        }
        const paragraph1 = p1Parts.join(" ");

        // Paragraph 2
        const p2Parts = [
            contentLibrary.careRole[ctx.answers.q3 as "A" | "B" | "C" | "D"],
            contentLibrary.selfNeeds[ctx.answers.q4 as "A" | "B" | "C" | "D"]
        ];
        if (["C", "D"].includes(ctx.answers.q4)) {
            const selfCareTag = ctx.tags.find(t => ['selfcare_rest', 'selfcare_health', 'selfcare_social', 'selfcare_household'].includes(t));
            if (selfCareTag) p2Parts.push(contentLibrary.tagLines[selfCareTag as keyof typeof contentLibrary.tagLines]);
        }
        p2Parts.push(contentLibrary.mental[ctx.answers.q5 as "A" | "B" | "C" | "D"]);
        if (ctx.answers.q5 === "D") {
            p2Parts.push("Het is begrijpelijk dat je je zo voelt gezien alles wat er op je bord ligt.");
        }
        const paragraph2 = p2Parts.join(" ");

        // Paragraph 3
        const p3Parts = [
            contentLibrary.structure[ctx.answers.q6 as "A" | "B" | "C" | "D"]
        ];
        if (["C", "D"].includes(ctx.answers.q6)) {
            const structureTag = ctx.tags.find(t => ['structure_planning', 'structure_admin', 'structure_household', 'structure_energy'].includes(t));
            if (structureTag) p3Parts.push(contentLibrary.tagLines[structureTag as keyof typeof contentLibrary.tagLines]);
        }
        p3Parts.push(contentLibrary.helpAsking[ctx.answers.q7 as "A" | "B" | "C" | "D"]);
        if (ctx.answers.q7 === "D") {
            p3Parts.push("Soms voelt het alsof je alles alleen moet dragen, wat de drempel om hulp te vragen extra hoog kan maken.");
        }
        p3Parts.push(contentLibrary.wish[ctx.answers.q8 as "A" | "B" | "C" | "D"]);
        p3Parts.push(contentLibrary.profileClosers[ctx.profileId]);
        const paragraph3 = p3Parts.join(" ");

        // Bullets
        const tagToBulletMap: Record<string, string> = {
            'household': 'Huishouden & basisrust thuis',
            'admin': 'Administratie & overzicht',
            'behind_care': 'Zorgdruk / zorgen voor anderen',
            'selfcare': 'Ruimte voor jezelf (rust, gezondheid, contact)',
            'structure_planning': 'Planning & afspraken',
            'structure_energy': 'Energie / dagindeling'
        };

        const categoryMap: Record<string, string> = {
            'behind_household': 'household', 'selfcare_household': 'household', 'structure_household': 'household',
            'behind_admin': 'admin', 'structure_admin': 'admin',
            'behind_care': 'behind_care',
            'behind_self': 'selfcare', 'selfcare_rest': 'selfcare', 'selfcare_health': 'selfcare', 'selfcare_social': 'selfcare',
            'structure_planning': 'structure_planning',
            'structure_energy': 'structure_energy'
        };

        const activeCategories = [...new Set(ctx.tags.map(t => categoryMap[t]))];
        const bullets = activeCategories.length > 0
            ? activeCategories.slice(0, 3).map(cat => tagToBulletMap[cat])
            : ['Rust & overzicht in het dagelijks leven'];

        return {
            profile,
            paragraphs: [paragraph1, paragraph2, paragraph3],
            bullets,
            closing: contentLibrary.closing
        };
    }, [showResult, scores, tagIds, answers, questions.length]);

    const displayQuestionData = isFollowUp
        ? currentQuestion.followUp!.followUpQuestion.question
        : currentQuestion.question;

    const displayOptions = isFollowUp
        ? currentQuestion.followUp!.followUpQuestion.options.map(o => ({ label: o.label, value: o.id }))
        : currentQuestion.options.map(o => ({ label: o.label, value: o.id }));

    return (
        <div className="bg-base min-h-screen">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center bg-surface/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-serif text-title mb-6 leading-tight max-w-4xl mx-auto">
                        {QUIZ_CONFIG.title}
                    </h1>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto font-light italic">
                        {QUIZ_CONFIG.description}
                    </p>
                </div>
            </header>

            {/* Quiz Section */}
            <section className="section-padding">
                <div className="container-custom">
                    {!showResult ? (
                        <QuizCard
                            key={`${currentQuestionIndex}-${isFollowUp}`}
                            question={displayQuestionData}
                            options={displayOptions}
                            onSelect={handleAnswer}
                            currentStep={currentQuestionIndex + 1}
                            totalSteps={questions.length}
                        />
                    ) : (
                        <div className="max-w-3xl mx-auto animate-fadeIn text-center">
                            <div className="bg-white p-10 rounded-xl shadow-soft">
                                <div className="flex justify-center mb-6">
                                    <div className="w-4 h-4 rounded-full bg-gold"></div>
                                </div>
                                <h2 className="text-3xl font-serif text-title mb-6 flex items-center justify-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                                    {storyData?.profile.title}
                                </h2>

                                <div className="text-left space-y-6 mb-8">
                                    {storyData?.paragraphs.map((para, idx) => (
                                        <p key={idx} className="text-lg text-text/80 leading-relaxed font-light">
                                            {para}
                                        </p>
                                    ))}
                                </div>

                                <div className="bg-base/30 p-6 rounded-lg mb-8 text-left border border-surface/50">
                                    <h4 className="font-serif text-xl mb-4 text-title">Waar je vooral op vastloopt:</h4>
                                    <ul className="space-y-2">
                                        {storyData?.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                                                <span className="text-text/90 font-light">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-xl text-title font-serif italic mb-8">
                                    {storyData?.closing}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to={QUIZ_CONFIG.cta.href} className="btn-primary bg-bronze text-white border-none hover:bg-gold">
                                        {QUIZ_CONFIG.cta.label}
                                    </Link>
                                    <Link to="/tarieven" className="btn-secondary">
                                        Bekijk tarieven
                                    </Link>
                                </div>

                                {/* Email Feature */}
                                <div className="mt-10 pt-8 border-t border-surface">
                                    {!showEmailForm && emailStatus !== 'success' ? (
                                        <button
                                            onClick={() => setShowEmailForm(true)}
                                            className="text-gold border-b border-gold pb-1 transition-all duration-300 hover:text-bronze hover:border-bronze font-btn uppercase tracking-widest text-sm font-bold"
                                        >
                                            Mail me de uitslag
                                        </button>
                                    ) : emailStatus === 'success' ? (
                                        <div className="text-gold-dark flex items-center justify-center gap-2 font-light">
                                            <Check size={20} className="text-gold" />
                                            De uitslag is naar je gemaild.
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSendEmail} className="max-w-md mx-auto space-y-4 animate-fadeIn">
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Je e-mailadres"
                                                        required
                                                        className="flex-grow px-4 py-3 border border-surface rounded-none focus:outline-none focus:border-gold font-light"
                                                    />
                                                    <button
                                                        type="submit"
                                                        disabled={emailStatus === 'sending'}
                                                        className="bg-gold text-white px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-dark transition-colors disabled:opacity-50"
                                                    >
                                                        {emailStatus === 'sending' ? 'Sending...' : 'Mailen'}
                                                    </button>
                                                </div>
                                                <p className="text-xs text-text/60 italic text-left">
                                                    Je e-mailadres wordt alleen gebruikt om deze uitslag te mailen.
                                                </p>
                                                {emailStatus === 'error' && (
                                                    <p className="text-xs text-red-500 text-left">
                                                        Er ging iets mis. Probeer het later opnieuw.
                                                    </p>
                                                )}
                                            </div>
                                        </form>
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-surface">
                                    <button
                                        onClick={() => {
                                            setShowResult(false);
                                            setCurrentQuestionIndex(0);
                                            setIsFollowUp(false);
                                            setScores([]);
                                            setAnswers({});
                                            setTagIds([]);
                                        }}
                                        className="text-text/60 hover:text-gold flex items-center gap-2 mx-auto transition-colors uppercase tracking-widest text-xs font-bold"
                                    >
                                        Opnieuw
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Quiz;
