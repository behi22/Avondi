export const initNavbar = () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar');

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

  // Scroll transparency
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call

  mobileMenuBtn?.addEventListener('click', openMobileMenu);
  mobileMenuClose?.addEventListener('click', closeMobileMenu);
};
