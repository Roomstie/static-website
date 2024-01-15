import { logoWithText } from "assets";
import { MenuLink } from "components/menu/MenuLink";
import { URLS } from "config";
import { Link } from "react-router-dom";
import { IFooterLink } from "types";

interface ILandingFooterProps {
  footerLinks: Readonly<IFooterLink[]>;
}

export const LandingFooter = ({ footerLinks }: ILandingFooterProps): JSX.Element => (
  <div className="w-full flex flex-row justify-center bg-gray-200 landing-spacing">
    <div className="max-w-container flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-4 lg:justify-evenly w-full">
      <div className="flex flex-col space-y-4">
        <Link to={URLS.__root__}>
          <img src={logoWithText.default} className="h-8" />
        </Link>
        <p>Amsterdam, NL</p>
      </div>
      {
        footerLinks.map(fl => (
          <div className="flex flex-col space-y-4" key={fl.label}>
            <b>{fl.label}</b>
            {
              fl.links.map(l => (
                <MenuLink
                  key={l.label}
                  link={l}
                  className=""
                />
              ))
            }
          </div>
        ))
      }
    </div>
  </div>
);
