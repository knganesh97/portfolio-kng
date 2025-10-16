import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer: React.FC<CardContainerProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl shadow-xl p-8 md:p-12 transition-colors bg-card text-card-foreground border border-border ${className}`}
  >
    {children}
  </div>
);

export default CardContainer;