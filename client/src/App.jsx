import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import HomeLayout from "./pages/homelayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/about',
    element: <h1>About</h1>
  }
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;