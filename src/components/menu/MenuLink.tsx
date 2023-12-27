import { URLS } from "config";
import { Link } from "react-router-dom";
import { IMenuLink } from "types";

interface MenuLinkProps {
  link: IMenuLink;
}

export const MenuLink = ({ link }: MenuLinkProps): JSX.Element => {
  if (link.target) {
    return (
      <a
        className="px-8 cursor-pointer hover:bg-gray-200 transition-all h-full flex items-center"
        href={`#${link.target as unknown as string}`}
      >
        <span>{link.label}</span>
      </a>
    );
  } else {
    return (
      <Link
        className="px-8 cursor-pointer hover:bg-gray-200 transition-all h-full flex items-center"
        to={(link.path ? URLS[link.path] : link.customPath) as string /* We know it's a valid string */}
      >
        <span>{link.label}</span>
      </Link>
    );
  }
};
