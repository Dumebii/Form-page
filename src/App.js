import Form from './components/Form';
import Plan from './components/plan';
import Selector from './components/Selector';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider}
   from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <div className="flex ml-[20rem] mt-10 bg-white lg: w-[50rem]">
  <Selector />
  <Form /> </div>
},
{
  path: "/plan",
  element: <Plan />
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
