import { ErrorPage } from "components/error";
import { ROUTE_TREE } from "config/routes";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

export const Main = (): JSX.Element => (
  <>

    <ErrorBoundary
      FallbackComponent={ErrorPage}
    >
      <RouterProvider router={ROUTE_TREE} />
    </ErrorBoundary>
    <Toaster position="bottom-right" />
  </>
);
