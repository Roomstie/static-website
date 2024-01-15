import { logoWithText } from "assets";
import { URLS } from "config";
import { Link } from "react-router-dom";
import { IMenuLink } from "types";

import { MenuLink } from "./MenuLink";

interface ILandingMenuProps {
  menuLinks: Readonly<IMenuLink[]>;
}

export const LandingMenu = ({ menuLinks }: ILandingMenuProps): JSX.Element => {
  return (
    <div className="flex flex-row justify-between max-w-container mt-6">
      <Link to={URLS.__root__} className="flex items-center">
        <img src={logoWithText.default} alt="Roomstie Logo" className="h-12" />
      </Link>
      <div className="flex flex-row justify-evenly">
        {
          menuLinks.map(l => (
            <MenuLink
              key={l.label}
              link={l}
              className="px-8 cursor-pointer hover:bg-gray-200 transition-all h-full flex items-center"
            />
          ))
        }
      </div>
    </div>
  );
};
