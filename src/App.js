// import Form from './components/Form';

import Plan from './components/plan';

// import Selector from './components/Selector';
import * as ReactDOM from "react-dom/client";

import Homepage from './components/homepage';

import { createBrowserRouter, RouterProvider}
   from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <Homepage />
},
{
  path: "/plan",
  element: <Plan />
},
{
  path: "/",
  element: <Homepage />
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
