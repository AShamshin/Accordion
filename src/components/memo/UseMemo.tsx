import { useMemo, useState } from 'react';

export const Example = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;
  resultA = useMemo(() => {
    let tempresultA = 1;

    for (let i = 1; i <= a; i++) {
      tempresultA = tempresultA * i;
    }
    return tempresultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
      <hr />
      <div>Result for a:{resultA}</div>
      <div>Result for b:{resultB}</div>
    </>
  );
};
