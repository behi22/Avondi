export function initInfoSlider() {
  const infoGrid = document.querySelector('.info-grid');
  const prevBtn = document.querySelector('.mobile-controls .prev-btn');
  const nextBtn = document.querySelector('.mobile-controls .next-btn');

  // debugging
  if (!infoGrid || !prevBtn || !nextBtn) {
    console.error('Required elements not found');
    return;
  }

  const cards = infoGrid.querySelectorAll('.info-card');
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 16; // 1rem gap from CSS
  const scrollAmount = cardWidth + gap;

  let isDragging = false;
  let startX;
  let scrollLeft;

  function hasScrollableContent() {
    return infoGrid.scrollWidth > infoGrid.clientWidth;
  }

  function updateButtonStates() {
    const isAtStart = infoGrid.scrollLeft <= 0;
    const isAtEnd =
      infoGrid.scrollLeft >= infoGrid.scrollWidth - infoGrid.clientWidth;
    const canScroll = hasScrollableContent();

    // At start: prev disabled, next enabled if can scroll
    if (isAtStart) {
      prevBtn.disabled = true;
      nextBtn.disabled = !canScroll;
      return;
    }

    // At end: prev enabled, next disabled
    if (isAtEnd) {
      prevBtn.disabled = false;
      nextBtn.disabled = true;
      return;
    }

    // In middle: both enabled
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function handleScroll() {
    requestAnimationFrame(updateButtonStates);
  }

  function scrollTo(direction) {
    const newScrollPosition = infoGrid.scrollLeft + direction * scrollAmount;
    infoGrid.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
    setTimeout(updateButtonStates, 100);
  }

  // Drag to scroll functionality
  function startDragging(e) {
    isDragging = true;
    infoGrid.classList.add('grabbing');
    startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
    scrollLeft = infoGrid.scrollLeft;

    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  }

  function stopDragging() {
    isDragging = false;
    infoGrid.classList.remove('grabbing');
  }

  function handleDrag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    infoGrid.scrollLeft = scrollLeft - walk;
    handleScroll();
  }

  // Event Listeners
  prevBtn.addEventListener('click', () => scrollTo(-1));
  nextBtn.addEventListener('click', () => scrollTo(1));

  // Mouse Events
  infoGrid.addEventListener('mousedown', startDragging);
  infoGrid.addEventListener('mousemove', handleDrag);
  infoGrid.addEventListener('mouseup', stopDragging);
  infoGrid.addEventListener('mouseleave', stopDragging);

  // Touch Events
  infoGrid.addEventListener('touchstart', startDragging, { passive: false });
  infoGrid.addEventListener('touchmove', handleDrag, { passive: false });
  infoGrid.addEventListener('touchend', stopDragging);

  // Scroll event
  infoGrid.addEventListener('scroll', handleScroll);

  // Initial setup - wait for layout to be complete
  window.addEventListener('load', () => {
    // Set initial states
    prevBtn.disabled = true;
    nextBtn.disabled = !hasScrollableContent();

    // Update states after a short delay to ensure layout is complete
    setTimeout(updateButtonStates, 100);
  });

  // Also update on resize
  window.addEventListener('resize', () => {
    requestAnimationFrame(updateButtonStates);
  });
}
