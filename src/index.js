import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<div>Pagina Not Found</div>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <RouterProvider router={router} />
);

