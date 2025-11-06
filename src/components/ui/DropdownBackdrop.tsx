import React from 'react';

interface DropdownBackdropProps {
  onClick: () => void;
}

export default function DropdownBackdrop({ onClick }: DropdownBackdropProps) {
  return (
    <div
      className="fixed inset-0 z-40"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
