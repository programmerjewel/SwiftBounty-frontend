import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import MainLayout from "@/layout/public/MainLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import AddTasksPage from "@/pages/dashboard/buyer/AddTasksPage";
import BuyerDashboard from "@/pages/dashboard/buyer/BuyerDashboard";
import PaymentsPage from "@/pages/dashboard/buyer/PaymentsPage";
import PurchaseCoinsPage from "@/pages/dashboard/buyer/PurchaseCoinsPage";
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
      // worker dashboard route
      {
        path: 'worker-home',
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
      },
      //buyer dashboard route
      {
        path: 'buyer-home',
        element: <BuyerDashboard/>
      },
      {
        path: 'add-tasks',
        element: <AddTasksPage/>
      },
      {
        path: 'purchase-coins',
        element: <PurchaseCoinsPage/>
      },
      {
        path: 'payments',
        element: <PaymentsPage/>
      },
    ]
  }
]);

export default Route;