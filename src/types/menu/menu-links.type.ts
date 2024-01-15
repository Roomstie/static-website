import { IUrlPath } from "types/url";

export type IMenuLink<Recursive extends boolean = true> = {
  label: string;
  /**
   * @deprecated NOT SUPPORTED YET (but you get the idea of how this could work)
   */
  children?: Recursive extends true ? IMenuLink[] : never;
  /**
   * Disable the link
   * @optional
   * @default false
   */
  disabled?: boolean;
} & (
  { url: string; target?: never; path?: never; customPath?: never; } | // External URL
  { target: string; url?: never; path?: never; customPath?: never; } | // Target an element in the page like #about-us
  { path: IUrlPath; url?: never; target?: never; customPath?: never; } | // A predefined URL, by its _name_, like "homepage" (which links to "/")
  { customPath: string; url?: never; path?: never; target?: never; } // A predefined URL, but with custom parameters, like `rooms/1234`
);
