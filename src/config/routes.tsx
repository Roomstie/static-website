import { Countdown } from "components/countdown";
import { ErrorPage } from "components/error";
import { LIVE_DATE, URLS } from "config";
import { FaqPage, PricingPage, TeamPage } from "pages";
import { LandingPage } from "pages/LandingPage";
import { NOT_FOUND_ROUTE } from "pages/NOT_FOUND";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { IRoute } from "types";

export const ROUTE_TREE = createBrowserRouter(([
  {
    path: URLS.root,
    element: <LandingPage />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: URLS.homepage,
            element: <Countdown targetDate={LIVE_DATE} />,
            handle: { title: "" },
          },
          {
            path: URLS.faq,
            element: <FaqPage />,
            handle: { title: "FAQ" },
          },
          {
            path: URLS.team,
            element: <TeamPage />,
            handle: { title: "Team" },
          },
          {
            path: URLS.pricing,
            element: <PricingPage />,
            handle: { title: "Pricing" },
          },
        ],
      },
      // Not found route
      NOT_FOUND_ROUTE,
    ],
  },
] satisfies IRoute[]) as RouteObject[]);
