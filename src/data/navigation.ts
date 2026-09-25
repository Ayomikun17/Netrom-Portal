import { SecondaryNavItem, TopNavItem } from "@/types";

export const topNavLinks: TopNavItem[] = [
  { name: "Workplace", href: "#", active: true, hasTooltip: true },
  { name: "People", href: "#" },
  { name: "Finance", href: "#" },
  { name: "Performance", href: "#" },
  { name: "Operations", href: "#" },
  { name: "All Features", href: "#", hasChevron: true },
];

export const secondaryNavLinks: SecondaryNavItem[] = [
  {
    name: "Features",
    href: "#os-showcase",
  },
  {
    name: "Platform",
    href: "#departments",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Resources",
    href: "#journey",
  },
  {
    name: "Contact Sales",
    href: "#contact",
    isModal: true,
    modalKey: "contact",
  },
];
