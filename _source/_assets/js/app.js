/* ----------------------------------------------------------------------------
js bundle
---------------------------------------------------------------------------- */

import Plyr from 'plyr';
import * as scroll from './utilities/scroll.js';

const player = new Plyr('#plyr', {
  iconUrl: '/assets/icons/plyr.svg',
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
});

document.addEventListener('DOMContentLoaded', () => {
  scroll.animateOnScroll();
  scroll.hasScrolled();
});
