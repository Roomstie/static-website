import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export const useErrorLogger = (error: any, routeError: any): void => {
  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (routeError) {
      console.error(routeError);
    }
  }, [error, routeError]);
};

interface ErrorPageProps {
  error?: any;
  /**
   * The type of page.
   * @optional
   */
  type?: "error" | "404";
}

export const ErrorPage = ({ error, type }: ErrorPageProps): JSX.Element => {
  const routeError: any = useRouteError();
  const _hasRaisedError: boolean = !!(error || routeError);
  const _errorMessage: string = routeError?.statusText ?? routeError?.message ?? "";

  return (
    <div id="error-page" className="flex flex-col h-full">
      <h1 className="text-4xl">
        {type === "404" && "404 NOT FOUND"}
        {type === "error" && "Error ocurred"}
        {type === undefined && "Generic error"}
      </h1>
      An error has ocurred:
      <pre>{routeError}</pre>
    </div>
  );
};
