import Form from './components/Form';
import Plan from './components/Plan';
import Selector from './components/Selector';

function App() {
  return (
    <div >
    <div className="flex ml-[20rem] mt-10 bg-white lg: w-[50rem]">
    <Selector />
    <Form />
    </div>
    <div>
    <Plan />
    </div>
    </div>
  );
}

export default App;
