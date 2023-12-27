import { RouteObject } from "react-router-dom";

export type IRoute = Omit<RouteObject, "handle" | "children"> & {
  /**
   * Route information (like Title) and permissions.
   * @optional
   */
  handle?: {
    /**
     * Page title
     */
    title: string;
    /**
     * Extra data, optional, accessible from the component as well
     */
    extra?: Record<string, any>;
  };
  /**
   * Route children
   * @optional
   */
  children?: IRoute[];
};
