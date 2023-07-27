import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home.tsx";
import Users from "@/pages/Users/Users.tsx";

import "@/styles/global.css";
import "@/styles/zero.css";
import Header from "@components/Header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: (
      <>
        <Header />
        <Users />
      </>
    ),
  },
  {
    path: "/user/:id",
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
