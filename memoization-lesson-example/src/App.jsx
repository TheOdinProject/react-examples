import React, {
  memo, Profiler, useMemo, useState, useRef,
} from 'react';

// Lets wrap the ButtonComponent with a memo
// eslint-disable-next-line react/function-component-definition, react/prop-types
const ButtonComponent = memo(({ children, onClick }) => {
  // To simulate a very slow render
  let i = 0;
  let j = 0;
  // increase iteration count for more lag
  const ITERATION_COUNT = 10_000;
  while (i < ITERATION_COUNT) {
    while (j < ITERATION_COUNT) {
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

function Counter() {
  const [count, setCount] = useState(0);
  const durationRef = useRef({ baseDuration: 0, actualDuration: 0 });

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  // eslint-disable-next-line no-unused-vars
  const memoizedHandleClick = useMemo(() => handleClick, []);

  const onRender = (_id, _phase, actualDuration, baseDuration) => {
    durationRef.current = { actualDuration, baseDuration };
  };

  return (
    <div>
      <Profiler id="buttoncomponent" onRender={onRender}>
        <h1>{count}</h1>
        {/* Swap handleClick with memoizedHandleClick and vice versa */}
        <ButtonComponent onClick={handleClick}>Click me!</ButtonComponent>
      </Profiler>
      <div>
        <h2>Base Duration:</h2>
        <p>
          <strong>{durationRef.current.baseDuration}</strong>
          <span>
            {' '}
            - The number of milliseconds estimating how much time it would take
            to re-render the entire Profile subtree without any optimizations.
            It is calculated by summing up the most recent render durations of
            each component in the tree. This value estimates a worst-case cost
            of rendering (e.g. the initial mount or a tree with no memoization).
            Compare actualDuration against it to see if memoization is working.
          </span>
        </p>
        <h2>Actual Duration:</h2>
        <p>
          <strong>{durationRef.current.actualDuration}</strong>
          <span>
            {' '}
            - The time spent rendering the Profiler component and its descendant
            for the current update, 0 means it rendered extremely fast! This
            will be the same as the Base Duration on the first render
          </span>
        </p>
      </div>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
