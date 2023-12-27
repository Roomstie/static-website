import { getPageTitle } from "functions/generic";
import { RouteObject } from "react-router-dom";

export const setTitleFromUrlMatches = (
  urlMatches: RouteObject[],
): string | undefined => {
  const match: RouteObject | undefined = (
    urlMatches
      .filter((m: RouteObject) => Boolean(m.handle?.title))
      .pop()
  );

  const pageTitle: string = getPageTitle(match?.handle?.title);
  document.title = pageTitle;
  return match?.handle?.title;
};
