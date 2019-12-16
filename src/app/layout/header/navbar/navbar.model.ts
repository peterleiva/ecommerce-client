export class Navbar {
  items: NavbarItem[] = [];
}

export class NavbarItem {
  constructor(
    public title: string,
    public link: string[] | string,
    public subItems?: NavbarItem[]) { }
}
