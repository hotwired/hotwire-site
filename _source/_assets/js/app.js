/* ----------------------------------------------------------------------------
js bundle
---------------------------------------------------------------------------- */

import * as scroll from './utilities/scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  scroll.animateOnScroll();
  scroll.hasScrolled();
});
