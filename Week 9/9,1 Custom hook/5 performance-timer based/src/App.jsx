import React, { useState } from 'react';
import useDebounce from './useDebounce.jsx';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

// import { useState } from 'react'

// import './App.css'

// const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(callback, delay);

//     return () => clearInterval(intervalId);
//   }, [callback, delay]);
// };

// function App() {
//   const [count, setCount] = useState(0)

//   useInterval(() => {
//     setCount(c => c + 1)
//   },1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App
