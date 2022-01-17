import { useReducer } from 'react';
import { globalState } from '../../contexts/App/data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      return { ...state, title: action.payload };
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
    case 'increment': {
      const { counter } = state;
      return { ...state, counter: counter + 1 };
    }
    case 'decrement': {
      const { counter } = state;
      return { ...state, counter: counter - 1 };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default App;
