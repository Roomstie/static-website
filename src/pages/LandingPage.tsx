import { LandingFooter } from "components/footer";
import { LandingMenu } from "components/menu";
import { FOOTER_LINKS, HOMEPAGE_MENU_LINKS } from "config";
import { setTitleFromUrlMatches } from "functions";
import { useEffect } from "react";
import { Outlet, RouteObject, useMatches } from "react-router-dom";
import { ILandingPageProps, IRoute } from "types";

export const LandingPage = ({ menuLinks: headerLinks, footerLinks }: ILandingPageProps): JSX.Element => {
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
      {
        /* Header/Menu */
        headerLinks && <LandingMenu menuLinks={headerLinks} />
      }

      {/* Main content */}
      <main>
        <Outlet /> {/* This is where the "children" get rendered */}
      </main>

      {
        /* Footer */
        footerLinks && <LandingFooter footerLinks={footerLinks} />
      }
    </div>
  );
};

// eslint-disable-next-line react/display-name
LandingPage.Simple = (): JSX.Element => <LandingPage />;

// eslint-disable-next-line react/display-name
LandingPage.WithMenus = (): JSX.Element =>
  <LandingPage
    menuLinks={HOMEPAGE_MENU_LINKS}
    footerLinks={FOOTER_LINKS}
  />;
