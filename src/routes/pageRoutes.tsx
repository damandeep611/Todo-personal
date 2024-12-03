import Layout from "@/Layout"
import Dashboard from "@/pages/Dashboard"
import { createBrowserRouter } from "react-router-dom"

const routes = [
  {
    path: '/',
    element: <Layout/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
]
export const router = createBrowserRouter(routes)