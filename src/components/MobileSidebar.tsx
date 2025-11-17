'use client'
import React from "react";
import { NAVIGATION_ITEMS } from "@/utils/Constants";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/utils/scrollUtils";
import { CloseIcon } from "@/components/icons";
import ThemeSwitcher from "@/components/ThemeSwitcher";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] sm:hidden bg-black/30"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-64 transform transition-transform duration-300 ease-in-out sm:hidden border-l header-bg ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-header-border)' }}>
          <h2 className="text-lg font-semibold header-title">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-all duration-200 header-link"
            aria-label="Close menu"
          >
            <CloseIcon width={20} height={20} />
          </button>
        </div>
        <div className="p-4 border-b" style={{ borderColor: 'var(--color-header-border)' }}>
          <ThemeSwitcher />
        </div>
        <nav className="p-4">
          {isHomepage ? (
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, onClose)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 text-left group"
                >
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground text-center py-8">
              Navigation available on homepage
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileSidebar;