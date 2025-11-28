export interface NavItem {
  id: string;
  title: string;
  href: string;
}

export interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
}
