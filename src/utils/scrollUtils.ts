import { HEADER_HEIGHT } from './Constants';

/**
 * Scrolls to a section on the page, accounting for the fixed header height
 * @param sectionId - The ID of the section to scroll to
 * @param callback - Optional callback to execute after initiating scroll
 */
export const scrollToSection = (sectionId: string, callback?: () => void) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - HEADER_HEIGHT;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  // Execute callback if provided (e.g., to close mobile sidebar)
  if (callback) {
    callback();
  }
};
