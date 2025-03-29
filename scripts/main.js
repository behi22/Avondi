import { initNavbar } from './components/navbar.js';
import { initBanner } from './components/banner.js';
import { initInfoSlider } from './components/info.js';
import { initDeliverySection } from './components/delivery.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBanner();
  initInfoSlider();
  initDeliverySection();
});
