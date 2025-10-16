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
            className={`rounded-xl border shadow-sm bg-card text-card-foreground border-border transition-transform hover:shadow-lg hover:-translate-y-1 ${className}`}
            style={style}
        >
            {header && (
                <div className="px-6 pt-6 pb-2 border-b border-border flex items-center gap-3">
                    {header}
                </div>
            )}
            {body && (
                <div className="px-6 py-4">
                    {body}
                </div>
            )}
            {footer && (
                <div className="px-6 pb-4 pt-2 border-t border-border flex items-center justify-between">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;