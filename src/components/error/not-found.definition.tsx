import { RouteObject } from "react-router-dom";

import { ErrorPage } from "./Error";

/**
 * Error page
 */
export const NOT_FOUND_ROUTE: RouteObject = {
  path: "*",
  element: <ErrorPage />,
  handle: { title: "Not Found" },
};
/**
 * Error page
 */
export const NOT_FOUND_PAGE: RouteObject = {
  path: "*",
  element: (
    <ErrorPage />
  ),
  handle: { title: "Not Found" },
};
