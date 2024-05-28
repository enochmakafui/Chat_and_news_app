import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import ChatPage from "./Pages/ChatPage";
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <NewsPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
