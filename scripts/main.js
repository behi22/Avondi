import { initNavbar } from './components/navbar.js';
import { initBanner } from './components/banner.js';
import { initInfoSlider } from './components/info.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBanner();
  initInfoSlider();
});
