/**
 * this files defines a abstract toggable directive
 * @packageDocumentation
 */
import { Output, EventEmitter, Input } from '@angular/core';

/**
 * Toggable abstract is implemented by directive to track two exclusive states
 *
 * The on state also know as the checked is set when the directive is true,
 * It counterpart, the off state is set when the state is unchecked or off.
 * Everytime the state toggle two events is emitted, each one send itself as
 * an event. One event represents the toggled and another represents the current
 * on/off state
 */
export abstract class Togglable {
  @Input() checked: boolean;
  @Output() toggled: EventEmitter<Togglable>;
  @Output() off: EventEmitter<Togglable>;
  @Output() on: EventEmitter<Togglable>;

  constructor() {
    this.toggled = new EventEmitter();
    this.on = new EventEmitter();
    this.off = new EventEmitter();
  }

  /**
   * Verifies if the current state is on (checked)
   */
  isOn(): boolean {
    return !!this.checked;
  }

  /**
   * Sets the current state to true and emit a toggled and on event
   *
   * Toggled event is sent everytime the toggable state change and on event
   * just when the current state is true
   */
  check() {
    this.checked = true;
    this.toggled.emit(this);
    this.on.emit(this);
  }

  /**
   * Uncheck the current state and emits a toggled and off events
   *
   * Toggled event is sent every state toggle, after that the unchecked sent a
   * off because it was closed
   */
  uncheck() {
    this.checked = false;
    this.toggled.emit(this);
    this.off.emit(this);
  }

  /**
   * Toggle is a specific method implemented by its children
   */
  abstract toggle();
}