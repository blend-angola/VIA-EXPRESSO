import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../root-layout"
import HomePage from "../pages/home-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
