import { IMenuLink } from "./menu-links.type";

export interface IFooterLink {
  label: string;
  links: Array<IMenuLink<false>>;
}
