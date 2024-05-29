import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import ChatPage from "./Pages/ChatPage";
import RootLayout from "./Layouts/RootLayout";
import NewsContent from "./components/NewsContent";

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
      {
        path: "/:title",
        element: <NewsContent />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />{" "}
    </>
  );
}

export default App;
