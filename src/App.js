import Plan from './components/plan';
import * as ReactDOM from "react-dom/client";

import Homepage from './components/homepage';

import { createBrowserRouter, RouterProvider}
   from 'react-router-dom';

import Pick from './components/pick';
import FinishingUp from './components/finishingUp';

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
},
{
  path: "/finishingUp",
  element: <FinishingUp />
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
