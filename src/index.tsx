import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import DIP from "./pages/forms/DIP"
import Login from "./pages/Login"
import Search from "./pages/Search"
import Home from "./pages/Home"
import Participant from './components/Participant';
import { Provider } from 'react-redux';
import { store } from "./store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/dip",
    element: <DIP />,
  },
  {
    path: "/participantes",
    element: <Participant />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
