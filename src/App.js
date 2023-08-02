import Plan from './components/Plan';
import Homepage from './components/homepage';
import { createBrowserRouter, RouterProvider}
   from 'react-router-dom';
import Pick from './components/pick';
import FinishingUp from './components/finishingUp';
import Thankyou from './components/thankyou';

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
},
{
  path: "/thankyou",
  element: <Thankyou />
}
])

function App() {  return (
    <RouterProvider router={router} />
  );
}

export default App;
