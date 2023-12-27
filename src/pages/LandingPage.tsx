import { HomepageMenu } from "components/menu";
import { Outlet } from "react-router-dom";

export const LandingPage = (): JSX.Element => (
  <div>
    <HomepageMenu />
    <main>
      <Outlet />
    </main>
  </div>
);
