export const initNavbar = () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  const toggleScrollLock = (isLocked) => {
    document.body.style.overflow = isLocked ? 'hidden' : '';
  };

  const openMobileMenu = () => {
    mobileMenu.classList.add('active');
    toggleScrollLock(true);
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('active');
    toggleScrollLock(false);
  };

  mobileMenuBtn?.addEventListener('click', openMobileMenu);
  mobileMenuClose?.addEventListener('click', closeMobileMenu);
};
