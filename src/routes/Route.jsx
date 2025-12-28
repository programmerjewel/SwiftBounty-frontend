import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import MainLayout from "@/layout/public/MainLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import MySubmissionPage from "@/pages/dashboard/worker/MySubmissionPage";
import TaskListPage from "@/pages/dashboard/worker/TaskListPage";
import WithdrawalPage from "@/pages/dashboard/worker/WithdrawalPage";
import WorkerDashboard from "@/pages/dashboard/worker/WorkerDashboard";
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
      
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/register',
    element: <RegisterPage/>,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: 'stat',
        element: <WorkerDashboard/>,
      },
      {
        path: 'task-list',
        element: <TaskListPage/>
      },
      {
        path: 'my-submission',
        element: <MySubmissionPage/>
      },
      {
        path: 'withdrawals',
        element: <WithdrawalPage/>
      }
    ]
  }
]);

export default Route;