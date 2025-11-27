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
}

const PricingCard = ({
    title,
    price,
    description,
    features,
    highlighted = false,
    ctaText = "Neem contact op",
    ctaLink = "/contact"
}: PricingCardProps) => {
    return (
        <div className={`card ${highlighted ? 'ring-2 ring-dark-brown scale-105 shadow-xl' : ''} relative flex flex-col h-full`}>
            {highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dark-brown text-beige-light px-6 py-1 rounded-full text-sm font-semibold shadow-md">
                    Populair
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-dark-brown mb-2">
                    {title}
                </h3>
                {price && (
                    <div className="text-3xl font-bold text-cacao mb-2">
                        {price}
                    </div>
                )}
                <p className="text-dark-brown/70">
                    {description}
                </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check size={18} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                        <span className="text-dark-brown/80">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                to={ctaLink}
                className={`block w-full ${highlighted ? 'btn-primary' : 'btn-secondary'}`}
            >
                {ctaText}
            </Link>
        </div>
    );
};

export default PricingCard;
