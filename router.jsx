import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./src/pages/layout.jsx";
import Mainpage from './src/pages/main_page.jsx'
import './src/index.css'
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Mainpage/>,
      },
    ],
  },
]);

export default router;