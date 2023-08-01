import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VideosPage from "../page/VideosPage";

/**
 * NAVIGATION PURPOSE
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <VideosPage />,
      },
      {
        path: "/videos/:keyword",
        element: <VideosPage />,
      },
    ],
  },
]);

export default router;
