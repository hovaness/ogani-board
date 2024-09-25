import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import '@/styles/shadows.css'


import {
  ThemedLayoutContextProvider,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp, ConfigProvider } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { authProvider, dataProvider, liveProvider } from './providers'
import { ForgotPassword, Home, Login, Register } from "./pages";
import Layout from "./components/layout";
import { tokenTheme } from "./config/theme";
import { resources } from "./config/resources";

function App() {
  return (
    <ConfigProvider theme={{
      token : tokenTheme
    }}>
      <BrowserRouter>
        <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "EjwRVx-Mv6R4L-lAMWvJ",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    element={
                      <Authenticated key='authenticated-layout'
                        fallback={<CatchAllNavigate to="/login" />}>
                        <Layout>
                          <Outlet />
                        </Layout>
                      </Authenticated>}
                  >
                    <Route index element={<Home />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler
                  handler={({ action, params, resource }) => {
                    const id = params?.id ?? "";

                    const actionPrefixMatcher = {
                      create: "Create new ",
                      clone: `#${id} Clone ${resource?.meta?.label}`,
                      edit: `#${id} Edit ${resource?.meta?.label}`,
                      show: `#${id} Show ${resource?.meta?.label}`,
                      list: `${resource?.meta?.label}`,
                    };

                    const suffix = "Ogani | ";
                    const title = suffix + actionPrefixMatcher[action || "list"];

                    return title;
                  }}
                />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </RefineKbarProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
