import { IFooterLink, IMenuLink } from "types";

export interface ILandingPageProps {
  /**
   * Links for the menu. Set to `undefined` to hide header
   */
  menuLinks?: Readonly<IMenuLink[]>;
  /**
   * Links for the footer. Set to `undefined` to hide footer
   */
  footerLinks?: Readonly<IFooterLink[]>;
}
