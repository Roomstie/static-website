import { IFooterLink, IMenuLink } from "types";

import { URLS } from "./url-paths";

export const PAGE_NAME = "Roomstie";

export const TARGET_JOBS = "jobs";

export const HOMEPAGE_MENU_LINKS: Readonly<IMenuLink[]> = [
  { path: URLS.homepage, label: "Home" },
  { path: URLS.team, label: "Meet the team" },
  { path: URLS.pricing, label: "Pricing" },
  { target: TARGET_JOBS, label: "We're hiring!" },
] as const;

export const FOOTER_LINKS: Readonly<IFooterLink[]> = [
  {
    label: "Platform",
    links: [
      { label: "Pricing", path: URLS.pricing },
      { label: "Team", path: URLS.team },
      { label: "Jobs", target: TARGET_JOBS },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "FAQ", path: URLS.faq },
    ],
  },
];
