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
        <div className="card max-w-2xl mx-auto animate-fadeIn">
            <div className="mb-6">
                <span className="text-sm font-medium text-dark-brown uppercase tracking-wider">
                    Vraag {currentStep} van {totalSteps}
                </span>
                <div className="w-full bg-sandstone h-2 rounded-full mt-2">
                    <div
                        className="bg-dark-brown h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-dark-brown mb-8">
                {question}
            </h3>

            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(option.value)}
                        className="w-full text-left p-4 rounded-lg border-2 border-sandstone hover:border-dark-brown hover:bg-beige-light transition-all duration-200 group flex items-center cursor-pointer"
                    >
                        <span className="w-8 h-8 rounded-full bg-sandstone text-dark-brown font-bold flex items-center justify-center mr-4 group-hover:bg-dark-brown group-hover:text-beige-light transition-colors">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-dark-brown font-medium">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizCard;
