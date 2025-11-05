import React from 'react';
import { ExternalLinkIcon } from '@/components/icons';

interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
  ariaLabel?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = '',
  showIcon = true,
  iconClassName = 'w-4 h-4',
  ariaLabel,
}) => {
  const hasChildren = Boolean(children);
  const shouldShowIcon = hasChildren ? false : showIcon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
      {shouldShowIcon && <ExternalLinkIcon className={iconClassName} />}
    </a>
  );
};

export default ExternalLink;
