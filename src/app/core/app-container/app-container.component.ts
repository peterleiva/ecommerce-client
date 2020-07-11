import { Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  AfterContentInit,
  OnDestroy,
  HostListener,
  Output,
  EventEmitter,
  NgZone} from '@angular/core';
import { gsap, TweenLite, Back, Bounce } from 'gsap';
import { Draggable } from 'gsap/draggable';
import { Subscription } from 'rxjs';
import { HamburguerButtonComponent } from 'src/app/layout/hamburguer-button/hamburguer-button.component';

gsap.registerPlugin(Draggable);


// FIXME: Mudar posição de snap. Em telas pequenas jogar forte para um lado e ficar preso

@Component({
  selector: 'store-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent
  implements AfterViewInit, AfterContentInit, OnDestroy {
  static DRAG_ANIMATION_DURATION = .3;
  static SIDEBAR_SNAP_AXIS = 278;

  @ContentChild(HamburguerButtonComponent)
  private button: HamburguerButtonComponent;
  private buttonSubscription: Subscription;
  @HostBinding('class.open') private _open: boolean;
  @HostBinding('class.opening') private opening = false;
  @Output('open') open$ = new EventEmitter();
  @ViewChild('trigger') private _trigger: ElementRef<HTMLDivElement>;

  constructor(private container: ElementRef, private zone: NgZone) { }

  @Input() set open(value: boolean) {
    this.zone.run(async () => {
      if (value) {
        this._open = value;
        this.opening = true;
        await this.openDrawer();
        this.opening = false;
        this.open$.emit();
      } else {
        await this.closeDrawer();
        this._open = value;
      }
    });
  }

  ngAfterContentInit(): void {
    this.buttonSubscription = this.button.toggleChange.subscribe(
      (button: HamburguerButtonComponent) => {
        this.open = button.checked;
      }
    );
  }

  private get drawerTrigger(): HTMLDivElement {
    return this._trigger.nativeElement;
  }

  private get app(): HTMLDivElement {
    return this.container.nativeElement;
  }

  ngAfterViewInit() {
    Draggable.create(this.app, {
      edgeResistance: 0,
      trigger: this.drawerTrigger,
      type: 'x',
      inertia: true,
      onDragStart: () => this.onDragStart(),
      onDragEnd: () => this.onDragEnd()
    });
  }

  @HostListener('click') private openContainer(): void {
    if (!this.opening && this._open) {
      this.open = false;
    }
  }

  private onDragStart(): void {
    this.opening = true;

    TweenLite.to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
      rotation: 1,
      scale: .84,
      transformOrigin: 'left',
      ease: Back.easeOut
    });
  }

  private async onDragEnd(): Promise<void> {
    const closeDistance = this.app.getBoundingClientRect().left;

    if (closeDistance < AppContainerComponent.SIDEBAR_SNAP_AXIS) {
      this.open = false;
    } else {
      this.open = true;
    }
    this.opening = false;
  }

  private async openDrawer(): Promise<TweenLite> {
    this.button.open();

    return (
      TweenLite
        .to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
          x: AppContainerComponent.SIDEBAR_SNAP_AXIS,
          rotation: 0,
          scale: .84,
          ease: Back.easeOut
        })
    );
  }

  private async closeDrawer(): Promise<TweenLite> {
    this.button.close();

    return (
      TweenLite
        .to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
          x: 0,
          rotation: 0,
          scale: 1,
          ease: Bounce.easeOut
        })
    );
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }
}
