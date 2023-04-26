import { useEffect, useState } from 'react';

export const ResetEffectExample = () => {
  const [text, setText] = useState('');

  console.log('SetTimeoutExample' + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText((state) => state + e.key);
    };

    window.addEventListener('keypress', handler);
    return () => {
      window.removeEventListener('keypress', handler);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};
