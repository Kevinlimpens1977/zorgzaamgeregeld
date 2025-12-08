import React from 'react';

interface QuizCardProps {
    question: string;
    options: { label: string; value: string }[];
    onSelect: (value: string) => void;
    currentStep: number;
    totalSteps: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, options, onSelect, currentStep, totalSteps }) => {
    return (
        <div className="bg-white p-10 rounded-xl shadow-soft max-w-3xl mx-auto animate-fadeIn">
            <div className="mb-8 text-center">
                <span className="text-sm font-medium text-nav-text uppercase tracking-wider">
                    Vraag {currentStep} van {totalSteps}
                </span>
                <div className="w-full bg-nav-button h-2 rounded-full mt-2">
                    <div
                        className="bg-nav-text h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-3xl font-serif text-highlight mb-8 text-center">
                {question}
            </h3>

            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(option.value)}
                        className="w-full text-left p-5 rounded-lg border-2 border-nav-button hover:border-tile transition-all duration-200 group flex items-center cursor-pointer"
                    >
                        <span className="w-10 h-10 rounded-full bg-nav-button text-nav-text font-bold flex items-center justify-center mr-4 group-hover:bg-tile group-hover:text-white transition-colors">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-lg text-nav-text font-medium">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizCard;
