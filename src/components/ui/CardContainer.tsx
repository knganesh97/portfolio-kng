import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer: React.FC<CardContainerProps> = ({ children, className = "" }) => (
  <div className={`rounded-3xl shadow-2xl p-8 md:p-12 transition-colors border card-container-bg ${className}`}>
    {children}
  </div>
);

export default CardContainer;