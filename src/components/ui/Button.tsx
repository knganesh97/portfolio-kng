'use client'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<string, string> = {
    primary:
        "btn-primary-bg btn-primary-fg hover:btn-primary-hover/90 focus:ring-2 focus:ring-ring shadow-md",
    secondary:
        "btn-secondary-bg btn-secondary-fg hover:btn-secondary-hover/80 border-2 btn-secondary-border focus:ring-2 focus:ring-ring",
    ghost:
        "btn-ghost-bg btn-ghost-fg hover:btn-ghost-hover hover:btn-ghost-hover-fg focus:ring-2 focus:ring-ring",
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
            focus:ring-offset-2
            ${variantClasses[variant]}
            ${className}
        `}
        {...props}
    >
        {children}
    </button>
);

export default Button;