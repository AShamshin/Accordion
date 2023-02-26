import { useState } from 'react';
import './OnOff.css';

type PropsType = {
  onChange: (on: boolean) => void;
};

export const OnOf = (props: PropsType) => {
  const [on, iiiOn] = useState<boolean>(true);

  const onClicked = () => {
    props.onChange(true);
    iiiOn(true);
  };
  const offClicked = () => {
    props.onChange(false);
    iiiOn(false);
  };

  return (
    <div>
      <div className={on ? 'on1' : 'off1'} onClick={onClicked}>
        on
      </div>
      <div className={!on ? 'on2' : 'off2'} onClick={offClicked}>
        off
      </div>
      <div></div>
    </div>
  );
};
