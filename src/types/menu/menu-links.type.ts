import { IUrlPath } from "types/url";

export type IMenuLink = {
  label: string;
  /**
   * @deprecated NOT SUPPORTED YET (but you get the idea of how this could work)
   */
  children?: IMenuLink[];
} & (
  { target: string; path?: never; customPath?: never; } | // Target an element in the page like #about-us
  { path: IUrlPath; target?: never; customPath?: never; } | // A predefined URL, by its _name_, like "homepage" (which links to "/")
  { customPath: string; path?: never; target?: never; } // A predefined URL, but with custom parameters, like `rooms/1234`
);
