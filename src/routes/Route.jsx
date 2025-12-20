import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import MainLayout from "@/layout/public/MainLayout";
import LoginPage from "@/pages/Auth/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage";
import ErrorPage from "@/pages/public/ErrorPage";
import HomePage from "@/pages/public/HomePage";
import { createBrowserRouter } from "react-router";

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/login',
        element: <LoginPage/>,
      },
      {
        path: '/register',
        element: <RegisterPage/>,
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
  }
]);

export default Route;