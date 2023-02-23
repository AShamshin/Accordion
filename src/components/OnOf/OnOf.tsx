import { useState } from 'react';
import { AType } from '../../App';
import './OnOff.css';

export const OnOf = () => {
  let [on, iiiOn] = useState<any>(true);

  const click = (onAndOff: boolean) => {
    iiiOn(onAndOff);
  };

  return (
    <div>
      <div className={on ? 'on1' : 'off1'} onClick={() => click(true)}>
        on
      </div>
      <div className={!on ? 'on2' : 'off2'} onClick={() => click(false)}>
        off
      </div>
      <div></div>
    </div>
  );
};
