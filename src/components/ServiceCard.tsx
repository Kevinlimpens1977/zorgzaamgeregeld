import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    features?: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
    return (
        <div className="card hover:scale-105 transform transition-transform duration-300">
            {icon && (
                <div className="text-dark-brown mb-4 flex justify-center md:justify-start">
                    {icon}
                </div>
            )}
            <h3 className="text-2xl font-serif font-semibold text-dark-brown mb-3">
                {title}
            </h3>
            <p className="text-dark-brown/80 mb-4 leading-relaxed">
                {description}
            </p>
            {features && features.length > 0 && (
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <Check size={18} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                            <span className="text-dark-brown/80">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ServiceCard;
