import { logoWithText } from "assets";
import { HOMEPAGE_MENU_LINKS, URLS } from "config";
import { Link } from "react-router-dom";

import { MenuLink } from "./MenuLink";

export const HomepageMenu = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between max-w-container mt-6">
      <Link to={URLS.root} className="flex items-center">
        <img src={logoWithText.default} alt="Roomstie Logo" className="h-12" />
      </Link>
      <div className="flex flex-row justify-evenly">
        {
          HOMEPAGE_MENU_LINKS.map(l => (
            <MenuLink key={l.label} link={l} />
          ))
        }
      </div>
    </div>
  );
};
