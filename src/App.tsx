import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";

const myRouter = createHashRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/setup",
      element: <div>Setup</div>,
    },
    {
      path: "/play",
      element: <div>Play</div>,
    },    
  ]
);

function App() {
  return (
    <div
      className="App p-3"
    >
      <RouterProvider 
        router={myRouter}
      />
    </div>
  );
}

export default App;
