'use client'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<string, string> = {
    primary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-2 focus:ring-ring shadow-md",
    secondary:
        "bg-muted text-muted-foreground hover:bg-muted/80 border-2 border-border focus:ring-2 focus:ring-ring",
    ghost:
        "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-ring",
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => (
    <button
        className={`
            px-6 py-2.5 rounded-full font-medium transition-all duration-200
            cursor-pointer
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