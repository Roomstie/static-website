import { LandingFooter } from "components/footer";
import { LandingMenu } from "components/menu";
import { setTitleFromUrlMatches } from "functions";
import { useEffect } from "react";
import { Outlet, RouteObject, useMatches } from "react-router-dom";
import { IRoute } from "types";

export const LandingPage = (): JSX.Element => {
  const matches: IRoute[] = useMatches() as IRoute[];

  /**
   * Whenever the URL changes, we find the `title` and add it to the browser's tab.
   * `Team` -> `Team | Roomstie`
   * `(empty)` -> `Roomstie`
   */
  useEffect(
    () => {
      setTitleFromUrlMatches(matches as RouteObject[]);
    },
    matches,
  );

  return (
    <div>
      {/* Header/Menu */}
      <LandingMenu />

      {/* Main content */}
      <main>
        <Outlet /> {/* This is where the "children" get rendered */}
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};
