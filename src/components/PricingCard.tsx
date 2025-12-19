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
        ? 'border-4 border-gold shadow-xl transform scale-105'
        : 'border border-gold hover:shadow-medium';

    const buttonClasses = isSelected
        ? 'bg-title text-base'
        : 'bg-transparent text-title border border-title';

    const animationClass = isSelected ? 'animate-wiggle' : '';

    return (
        <div
            className={`relative card p-8 rounded-xl flex flex-col h-full transition-all duration-300 cursor-pointer bg-white ${cardClasses} ${animationClass}`}
            onClick={onSelect}
        >
            {highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 border-2 border-gold rounded-md">
                    <span className="text-sm font-semibold text-title">Meest gekozen</span>
                </div>
            )}

            <div className={`mb-6 text-center ${isHighlightedAndSelected ? 'text-white' : 'text-title'}`}>
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
                        <span className="w-2 h-2 rounded-full bg-gold mr-3 flex-shrink-0 mt-2"></span>
                        <span className="text-title/80">{feature}</span>
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
