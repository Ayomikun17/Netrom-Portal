export interface SubNavItem {
  name: string;
  dept?: string;
  isModal?: boolean;
  modalKey?: string;
  href?: string;
}

export interface SecondaryNavItem {
  name: string;
  href: string;
  hasChevron?: boolean;
  isModal?: boolean;
  modalKey?: string;
  items?: SubNavItem[];
}

export interface TopNavItem {
  name: string;
  href: string;
  active?: boolean;
  hasTooltip?: boolean;
  hasChevron?: boolean;
}
