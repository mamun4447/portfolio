import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GrehoDetails from "./components/GrehoDetails";
import Home from "./components/Home";
import Main from "./components/Layout/Main";
import RideDetails from "./components/RideDetails";
import TourDetails from "./components/TourDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/details/Greeho-Sheba",
          element: <GrehoDetails />,
        },
        {
          path: "/details/Get-Ride",
          element: <RideDetails />,
        },
        {
          path: "/details/Tour-Plan",
          element: <TourDetails />,
        },
      ],
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
