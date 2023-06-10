import Plan from './components/plan';
import * as ReactDOM from "react-dom/client";

import Homepage from './components/homepage';

import { createBrowserRouter, RouterProvider}
   from 'react-router-dom';

import Pick from './components/pick';

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
},
{
  path: "/pick",
  element: <Pick />
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
