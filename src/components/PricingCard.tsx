import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
    title: string;
    price?: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    ctaText?: string;
    ctaLink?: string;
    isSelected?: boolean;
    onSelect?: () => void;
}

const PricingCard = ({
    title,
    price,
    description,
    features,
    highlighted = false,
    ctaText = "Neem contact op",
    ctaLink = "/contact",
    isSelected,
    onSelect
}: PricingCardProps) => {
    const isHighlightedAndSelected = highlighted && isSelected;

    const cardClasses = isSelected
        ? 'border-4 border-gold-accent shadow-xl transform scale-105'
        : 'border border-gold-accent hover:shadow-medium';

    const buttonClasses = isSelected
        ? 'bg-nav-text text-background'
        : 'bg-transparent text-nav-text border border-nav-text';
        
    const animationClass = isSelected ? 'animate-wiggle' : '';

    return (
        <div
            className={`relative card p-8 rounded-xl flex flex-col h-full transition-all duration-300 cursor-pointer bg-white ${cardClasses} ${animationClass}`}
            onClick={onSelect}
        >
            {highlighted && (
                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 border-2 border-gold-accent rounded-md">
                    <span className="text-sm font-semibold text-nav-text">Meest gekozen</span>
                </div>
            )}

            <div className={`mb-6 text-center ${isHighlightedAndSelected ? 'text-white' : 'text-dark-contrast'}`}>
                <h3 className="text-2xl font-serif font-medium">
                    {title}
                </h3>
                {price && (
                    <div className="text-4xl font-serif font-medium my-4">
                        {price}
                    </div>
                )}
                <p className="text-base ">
                    {description}
                </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <Check size={18} className="mr-3 flex-shrink-0 text-nav-text" />
                        <span className="text-nav-text/80">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                to={ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-colors duration-300 ${buttonClasses}`}
            >
                {ctaText}
            </Link>
        </div>
    );
};

export default PricingCard;
