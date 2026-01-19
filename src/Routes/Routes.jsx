import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("law.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/blog",
        loader: () => fetch("law.json"),
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/readList",
        loader: () => fetch("law.json"),
        Component: ReadList,
      },
      {
        path: "/lawyerDetails/:id",
        loader: () => fetch("law.json"),
        Component: LawyerDetails,
      },
    ],
  },
]);
