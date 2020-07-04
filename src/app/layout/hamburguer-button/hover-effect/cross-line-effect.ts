import HoverEffect from './hover-effect.abstract';
import { Bounce } from 'gsap';

export default class CrossLineEffect extends HoverEffect {
  private get crossLine(): SVGLineElement {
    return this._icon.querySelector('#top-line');
  }

  hover() {
    console.log('cross line effect');

    this.timeline.add('begin');
    this.timeline.to(this._icon, .3, {
      rotate: 180,
      ease: Bounce.easeOut
    })
    .to(this.crossLine, .25, {
        attr: {
          x1: 50,
          y1: 50
        }
      }, 'begin+=.15')
    .play();
  }
}