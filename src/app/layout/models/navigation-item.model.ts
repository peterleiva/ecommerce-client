/**
 * Represents a single navigation data
 *
 * The navigation data has the navigation name (title) and optional icon, link,
 * and level name. This model maps all required data to unique nav item
 */
export default class NavigationItem {
  constructor(public name: string, public link?: string[] | string,
              public levelName?: string, public icon?: string) { }
}
