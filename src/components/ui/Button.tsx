'use client'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<string, string> = {
    primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-ring",
    secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border focus:ring-2 focus:ring-ring",
    ghost:
        "bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-ring",
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => (
    <button
        className={`
            px-6 py-2 rounded-lg font-medium transition-colors
            shadow-sm cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
            focus:outline-none focus:ring-offset-2
            ${variantClasses[variant]}
            ${className}
        `}
        {...props}
    >
        {children}
    </button>
);

export default Button;