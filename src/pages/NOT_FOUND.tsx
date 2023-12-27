import { ErrorPage } from "components/error";
import { RouteObject } from "react-router-dom";

export const NotFoundPage = (): JSX.Element => (
  <h1 className="text-4xl">Not Found</h1>
);

/**
 * Error page
 */
export const NOT_FOUND_ROUTE: RouteObject = {
  path: "*",
  element: <ErrorPage type="404" />,
  handle: { title: "Not Found" },
};
/**
 * Error page
 */
export const NOT_FOUND_PAGE: RouteObject = {
  path: "*",
  element: (
    <ErrorPage type="404" />
  ),
  handle: { title: "Not Found" },
};
