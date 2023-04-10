import { useMemo, useState } from 'react';

function generateData() {
  console.log('generateData');
  return 1;
}

export const Example2 = () => {
  console.log('Example2');

  //const initValue = useMemo(generateData, []);

  const [counter, setCounter] = useState(generateData);

  return (
    <>
      <button onClick={() => setCounter((state) => state + 1)}>+</button>
      {counter}
    </>
  );
};
