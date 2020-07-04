import { TimelineMax } from 'gsap';

export default abstract class HoverEffect {
  protected _icon: SVGElement;
  timeline: TimelineMax;

  constructor(icon?: SVGElement) {
    this._icon = icon;
    this.timeline = new TimelineMax();
  }

  set icon(icon: SVGElement) {
    this._icon = icon;
  }

  abstract hover();

  async hoverOut(): Promise<TimelineLite> {
    return this.timeline.reverse();
  }
}