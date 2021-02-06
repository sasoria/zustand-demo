import logo from './logo.svg';
import './App.css';
import useStore from './store/store';
import { selectCount, selectIncrease, selectClear } from './store/selectors';

function App() {
  const count = useStore(selectCount);
  const increase = useStore(selectIncrease);
  const clear = useStore(selectClear);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => clear()}>Reset</button>
    </div>
  );
}

export default App;
