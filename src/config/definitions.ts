import { IMenuLink } from "types";

export const PAGE_NAME = "Roomstie";

export const TARGET_HOME = "";
export const TARGET_TEAM = "team";
export const TARGET_PRICING = "pricing";
export const TARGET_JOBS = "jobs";

export const HOMEPAGE_MENU_LINKS: Readonly<IMenuLink[]> = [
  { target: TARGET_HOME, label: "Home" },
  { target: TARGET_TEAM, label: "Meet the team" },
  { target: TARGET_PRICING, label: "Pricing" },
  { target: TARGET_JOBS, label: "We're hiring!" },
] as const;
