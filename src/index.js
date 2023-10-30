import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
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
        path:"about",
        element:<div>About Me</div>
      },
      {
        path:"contact",
        element:<div>Contact</div>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <RouterProvider router={router} />
);

