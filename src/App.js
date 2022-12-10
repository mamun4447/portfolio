import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
