import './App.css';
import useStore from './store/store';
import { selectCount } from './store/selectors';
import Buttons from './components/Buttons';

function App() {
  const count = useStore(selectCount);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <Buttons />
    </div>
  );
}

export default App;
