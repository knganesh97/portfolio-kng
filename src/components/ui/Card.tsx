import React from 'react';

interface CardProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ header, body, footer, className = '', style }) => {
    return (
        <div
            className={`rounded-2xl border shadow-md card-bg card-fg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 card-border flex flex-col ${className}`}
            style={style}
        >
            {header && (
                <div className="px-6 pt-6 pb-4 flex items-start gap-3 border-b card-inner-border flex-shrink-0 card-header-bg brightness-[0.98] rounded-t-2xl">
                    {header}
                </div>
            )}
            {body && (
                <div className="px-6 py-4 flex-grow card-bg">
                    {body}
                </div>
            )}
            {footer && (
                <div className="px-6 pb-4 pt-2 flex items-center justify-between border-t card-inner-border flex-shrink-0 card-footer-bg brightness-[0.98] rounded-b-2xl">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;