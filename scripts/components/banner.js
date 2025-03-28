export function initBanner() {
  const bannerImage = document.querySelector('.banner-image');
  const bannerImagesContainer = document.querySelector('.banner-images');
  let currentIndex = 1;
  let interval;
  let isPaused = false;
  let isMobile = window.innerWidth < 768;
  const totalImages = 10;

  // Function to update image source
  function updateImageSource() {
    const folder = isMobile ? 'mobile' : 'desktop';
    bannerImage.src = `assets/pics/banner/${folder}/%23${currentIndex}.png`;
  }

  // Function to show next image
  function showNextImage() {
    if (isPaused) return;

    currentIndex = (currentIndex % totalImages) + 1;
    updateImageSource();
  }

  // Start the rotation interval
  function startRotation() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 1000);
  }

  // Handle hover pause on desktop
  bannerImagesContainer.addEventListener('mouseenter', () => {
    if (!isMobile) {
      isPaused = true;
    }
  });

  bannerImagesContainer.addEventListener('mouseleave', () => {
    if (!isMobile) {
      isPaused = false;
      startRotation();
    }
  });

  // Handle tap pause on mobile
  bannerImagesContainer.addEventListener('click', () => {
    if (isMobile) {
      isPaused = !isPaused;
      if (!isPaused) {
        startRotation();
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const wasDesktop = !isMobile;
    isMobile = window.innerWidth < 768;

    // If we switched between mobile and desktop
    if (wasDesktop !== !isMobile) {
      currentIndex = 1;
      updateImageSource();
      startRotation();
    }
  });

  // Initial setup
  updateImageSource();
  startRotation();
}
