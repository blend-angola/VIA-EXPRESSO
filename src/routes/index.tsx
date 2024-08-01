import RootLayout from "../root-layout"
import HomePage from "../pages/home-page"
import { createBrowserRouter } from "react-router-dom"
import RecruitmentPage from "../pages/recruitment-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/recrutamento",
        element: <RecruitmentPage />,
      },
    ],
  },
])
