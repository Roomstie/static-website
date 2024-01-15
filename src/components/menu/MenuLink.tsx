import classNames from "classnames";
import { Link } from "react-router-dom";
import { IClassName, IMenuLink } from "types";

interface MenuLinkProps extends IClassName {
  link: IMenuLink;
}

/**
 * Keep this component unstyled, so it can be used by different components!
 */
export const MenuLink = ({ link, className = "" }: MenuLinkProps): JSX.Element => {
  const classes = classNames(
    className,
    { "pointer-events-none": link.disabled },
  );
  if (typeof link.target === "string") {
    return (
      <a
        className={classes}
        href={`#${link.target || " "}`}
      >
        <span>{link.label}</span>
      </a>
    );
  } else if (typeof link.url === "string") {
    return (
      <a
        className={classes}
        href={link.url}
        rel="noreferrer"
        target="_blank"
        title="Open in new tab"
      >
        <span>{link.label}</span>
      </a>
    );
  } else {
    return (
      <Link
        className={classes}
        to={(link.path ?? link.customPath) /* We know it's a valid string */}
      >
        <span>{link.label}</span>
      </Link>
    );
  }
};
