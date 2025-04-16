import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "./App.tsx";
import workplaceItems from "./components/Projects/list.ts";
import IndexPage from "./containers/index.tsx";
import ProjectLayout from "./containers/projects/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <IndexPage />,
      },
      {
        path: "project",
        element: <ProjectLayout />,
        children: [
          ...workplaceItems.map((router) => {
            const Page = router.page;

            return {
              path: `${router.id}`,
              element: <Page />,
            };
          }),
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
