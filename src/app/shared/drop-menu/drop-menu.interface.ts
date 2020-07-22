/**
 * This file describe a drop menu interface
 * @packageDocumentation
 */

import { Togglable } from '../togglable/togglable';

/**
 * A Drop menu interface from dropdown like components
 *
 */
export default interface DropMenu {

  /**
   * Change the current drop menu state
   *
   * Toggles knows the current state then acts to invert the state whatever it
   * is at the time. So, indirectly it calls show or hide methods depending on
   * the actual visibility
   */
  toggle(): void;

  /**
   * Make the drop menu visible
   *
   * Dropdown only has two state, the show state make it visible if it hide or
   * maintain the show state. The element must reapear on the dom
   */
  show(): void;

  /**
   * Make the drop menu disappear
   *
   * The oposite of show action, except the component is completely removed from
   * DOM, garbage collector can collect memory.
   */
  hide(): void;

}
