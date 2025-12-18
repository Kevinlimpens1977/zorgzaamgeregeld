import React from 'react';

interface QuizCardProps {
    question: string;
    options: { label: string; value: string }[];
    onSelect: (value: string) => void;
    currentStep: number;
    totalSteps: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, options, onSelect, currentStep, totalSteps }) => {
    const [selectedId, setSelectedId] = React.useState<string | null>(null);

    const handleSelect = (value: string) => {
        if (selectedId) return;
        setSelectedId(value);
        setTimeout(() => {
            onSelect(value);
            setSelectedId(null);
        }, 1000);
    };

    return (
        <div className="bg-white p-10 rounded-xl shadow-soft max-w-3xl mx-auto animate-fadeIn overflow-hidden">
            <div className="mb-8 text-center">
                <span className="text-sm font-medium text-text uppercase tracking-wider">
                    Vraag {currentStep} van {totalSteps}
                </span>
                <div className="w-full bg-surface h-2 rounded-full mt-2">
                    <div
                        className="bg-gold h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-3xl font-serif text-title mb-8 text-center">
                {question}
            </h3>

            <div className="space-y-4 min-h-[400px]">
                {options.map((option, index) => {
                    const isSelected = selectedId === option.value;
                    const isOtherSelected = selectedId !== null && !isSelected;

                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            disabled={selectedId !== null}
                            className={`w-full text-left p-5 rounded-lg border-2 border-surface transition-all duration-300 group flex items-center cursor-pointer
                                ${isOtherSelected ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                ${isSelected ? 'shadow-card border-gold scale-[1.02] bg-base/50' : 'hover:border-gold/30 hover:bg-base/20'}
                            `}
                        >
                            <span className={`w-10 h-10 rounded-full bg-surface text-text font-bold flex items-center justify-center mr-4 transition-all duration-300 
                                group-hover:ring-2 group-hover:ring-gold group-hover:ring-offset-2
                                ${isSelected ? 'ring-2 ring-gold ring-offset-2 bg-gold/10' : ''}
                            `}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="text-lg text-text font-medium">{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizCard;
