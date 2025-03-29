export function initDeliverySection() {
  const cards = document.querySelectorAll('.delivery-card');
  const deliverySection = document.querySelector('.delivery-section');

  if (cards && deliverySection) {
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        deliverySection.classList.add(`hover-active-${index + 1}`);
      });

      card.addEventListener('mouseleave', () => {
        deliverySection.classList.remove(`hover-active-${index + 1}`);
      });
    });
  }
}
