import type { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    features?: string[];
    isHovered?: boolean;
}

const ServiceCard = ({ title, description, isHovered }: ServiceCardProps) => {
    return (
        <div className={`card-service h-full flex flex-col items-center text-center group ${isHovered ? 'shadow-card -translate-y-2 border-surface' : ''}`}>
            <div className="mb-6">
                <div className="w-3 h-3 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125"></div>
            </div>
            <h3 className="text-2xl font-serif text-title mb-4 relative pb-4">
                {title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-champagne/50"></span>
            </h3>
            <p className="text-text/80 leading-relaxed font-light">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;

