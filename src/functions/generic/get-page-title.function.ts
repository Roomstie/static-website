import { PAGE_NAME } from "config";

export const getPageTitle = (title: string | undefined): string =>
  title ? `${title} | ${PAGE_NAME}` : PAGE_NAME;
