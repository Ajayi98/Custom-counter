import { useState } from "react";

function useCustomCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => ++count);

  const decrement = () => setCount((count) => --count);
  const reset = () => setCount(0);
  const setValue = (value) => setCount(value);

  return [count, increment, decrement, reset, setValue];
}

export default useCustomCounter;
