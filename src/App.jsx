import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import HomePage from "./components/HomePage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}