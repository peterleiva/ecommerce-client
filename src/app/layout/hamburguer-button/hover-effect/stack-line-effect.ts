import HoverEffect from './hover-effect.abstract';

export default class StackLineEffect extends HoverEffect {
  private get middleLine(): SVGLineElement {
    return this._icon.querySelector('.container line');
  }

  private get topLine(): SVGLineElement {
    return this._icon.querySelector('#top-line');
  }

  private get container(): SVGElement {
    return this._icon.querySelector('.container');
  }

  hover() {
    this.timeline.add('begin');
    this.timeline
      .to(this.topLine, .15, { x: -30 })
      .to(this.topLine, .15, { y: 25 })
      .add('topline')

      .to(this.middleLine, .2, { y: -25 }, 'begin')
      .to(this.container, .1, { y: 25 }, 'topline');

    this.timeline.play();
  }
}
