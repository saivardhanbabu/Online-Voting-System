import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <Signup />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <div>
      {/* Corrected the prop name from 'route' to 'router' */}
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
