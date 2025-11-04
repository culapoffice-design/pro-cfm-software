import { Refine } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { notificationProvider, ThemedLayoutV2 } from "@refinedev/antd";
import { dataProvider } from "./providers/dataProvider";
import { BuildingsList, ZonesList, AssetsList } from "./pages";
import "@refinedev/antd/dist/reset.css";

export const App = () => (
  <BrowserRouter>
    <Refine
      dataProvider={dataProvider}
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      resources={[
        { name: "buildings", list: "/buildings" },
        { name: "zones", list: "/zones" },
        { name: "assets", list: "/assets" },
      ]}
      options={{ syncWithLocation: true }}
    >
      <Routes>
        <Route
          element={
            <ThemedLayoutV2>
              <Outlet />
            </ThemedLayoutV2>
          }
        >
          <Route index element={<NavigateToResource resource="buildings" />} />

          <Route path="/buildings">
            <Route index element={<BuildingsList />} />
          </Route>

          <Route path="/zones">
            <Route index element={<ZonesList />} />
          </Route>

          <Route path="/assets">
            <Route index element={<AssetsList />} />
          </Route>
        </Route>
      </Routes>
    </Refine>
  </BrowserRouter>
);
