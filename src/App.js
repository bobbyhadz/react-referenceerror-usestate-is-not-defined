import './App.css';

// 👇️ import useState hook
import {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = event => {
    setCount(current => current + 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;
