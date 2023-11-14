import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import First from "./pages/first/First.tsx";
import Second from "./pages/second/Second.tsx";
import Third from "./pages/third/Third.tsx";
import Layout from "./pages/Layout.tsx";

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start()
}
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element:<App/>,
      },
      {
        path: "/first",
        element:<First/>,
      },
      {
        path: "/second",
        element: <Second />,
      },
      {
        path: "/third",
        element: <Third />,
      }
    ]
  },
],{
  basename: "/msw-v2/",
});

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
