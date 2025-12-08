import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, RotateCcw } from 'lucide-react';
import QuizCard from '../components/QuizCard';

const Quiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "Hoe voelt je thuissituatie nu?",
            options: [
                { label: "Ik red het nog, maar kom tijd tekort", value: "A" },
                { label: "Het is rommelig en ik mis overzicht", value: "B" },
                { label: "Ik loop continu achter de feiten aan", value: "C" },
                { label: "Ik ben mantelzorger en voel me overbelast", value: "D" }
            ]
        },
        {
            question: "Waar heb je het meest behoefte aan?",
            options: [
                { label: "Hulp met schoonmaken/huishouden", value: "A" },
                { label: "Structuur & overzicht", value: "B" },
                { label: "Iemand die me begeleidt en rust brengt", value: "C" },
                { label: "Iemand die taken echt overneemt (mantelzorgvervanging)", value: "D" }
            ]
        },
        {
            question: "Hoeveel hulp denk je nodig te hebben?",
            options: [
                { label: "Ongeveer 3 uur per week", value: "A" },
                { label: "Ongeveer 6 uur per week", value: "B" },
                { label: "6 tot 10 uur per week", value: "C" },
                { label: "Geen idee, maar meer dan nu in elk geval", value: "D" }
            ]
        },
        {
            question: "Wat is je grootste wens op dit moment?",
            options: [
                { label: "Een schoon en leefbaar huis", value: "A" },
                { label: "Rust & structuur", value: "B" },
                { label: "Minder stress & iemand die meedenkt", value: "C" },
                { label: "Echte verlichting van mantelzorg", value: "D" }
            ]
        }
    ];

    const handleAnswer = (value: string) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateResult = () => {
        const counts: { [key: string]: number } = { A: 0, B: 0, C: 0, D: 0 };
        answers.forEach(a => counts[a] = (counts[a] || 0) + 1);

        let maxCount = 0;
        let winners: string[] = [];

        Object.entries(counts).forEach(([key, count]) => {
            if (count > maxCount) {
                maxCount = count;
                winners = [key];
            } else if (count === maxCount) {
                winners.push(key);
            }
        });

        if (maxCount < 2 || winners.length > 1) {
            return "Mixed";
        }
        return winners[0];
    };

    const getResultContent = (result: string) => {
        switch (result) {
            case "A":
                return {
                    title: "Rust in Huis",
                    description: "Ideaal voor regelmatige huishoudelijke ondersteuning. Wij zorgen voor een schoon en fris huis, zodat jij tijd overhoudt voor andere dingen.",
                    tag: "Jouw ideale match"
                };
            case "B":
                return {
                    title: "Volledige Ontzorging",
                    description: "Complete huishoudelijke en persoonlijke ondersteuning. Wij brengen structuur en overzicht terug in je leven.",
                    tag: "Jouw ideale match"
                };
            case "C":
                return {
                    title: "Volledige Ontzorging",
                    description: "Jij hebt behoefte aan rust en begeleiding. Dit pakket biedt de ondersteuning die je zoekt. Ook onze Strippenkaart kan een goede flexibele optie zijn.",
                    tag: "Jouw ideale match"
                };
            case "D":
                return {
                    title: "Intensieve Thuisondersteuning",
                    description: "Voor complexe situaties en intensieve zorg. Wij nemen taken over en bieden verlichting, zodat jij weer op adem kunt komen.",
                    tag: "Jouw ideale match"
                };
            default:
                return {
                    title: "Maatwerkpakket",
                    description: "Jouw situatie is uniek en vraagt om een persoonlijke aanpak. Samen stellen we een pakket samen dat perfect bij je past.",
                    tag: "Speciaal voor jou"
                };
        }
    };

    const result = showResult ? calculateResult() : "";
    const content = showResult ? getResultContent(result) : null;

    return (
        <div className="bg-background">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-highlight mb-4">
                        Vind de Juiste Ondersteuning
                    </h1>
                    <p className="text-xl text-nav-text max-w-3xl mx-auto">
                        Beantwoord vier korte vragen en ontdek welke dienst het beste aansluit bij uw behoeften.
                    </p>
                </div>
            </header>

            {/* Quiz Section */}
            <section className="section-padding">
                <div className="container-custom">
                    {!showResult ? (
                        <QuizCard
                            question={questions[currentStep].question}
                            options={questions[currentStep].options}
                            onSelect={handleAnswer}
                            currentStep={currentStep + 1}
                            totalSteps={questions.length}
                        />
                    ) : (
                        <div className="max-w-3xl mx-auto animate-fadeIn text-center">
                            <div className="bg-white p-10 rounded-xl shadow-soft">
                                <div className="inline-block p-4 bg-tile/10 rounded-full mb-6 text-nav-text">
                                    <Sparkles size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-serif text-highlight mb-2">
                                    {content?.title}
                                </h2>
                                <p className="text-lg text-nav-text mb-8">
                                    {content?.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/contact" className="btn-primary">
                                        Plan een gesprek
                                    </Link>
                                    <Link to="/tarieven" className="btn-secondary">
                                        Bekijk tarieven
                                    </Link>
                                </div>
                                <div className="mt-8 pt-6 border-t border-nav-button">
                                    <button
                                        onClick={() => {
                                            setShowResult(false);
                                            setCurrentStep(0);
                                            setAnswers([]);
                                        }}
                                        className="text-nav-text hover:text-highlight flex items-center gap-2 mx-auto transition-colors"
                                    >
                                        <RotateCcw size={16} />
                                        Doe de test opnieuw
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
