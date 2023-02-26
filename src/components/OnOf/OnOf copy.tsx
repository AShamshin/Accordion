import './OnOff copy.css';

type typeProps = {
  on: boolean;
  iiiOn: (on: boolean) => void;
};

export const OnOfCopy = (props: typeProps) => {
  return (
    <div>
      <div
        className={props.on ? 'on1' : 'off1'}
        onClick={() => props.iiiOn(true)}
      >
        on
      </div>
      <div
        className={!props.on ? 'on2' : 'off2'}
        onClick={() => props.iiiOn(false)}
      >
        off
      </div>
      <div></div>
    </div>
  );
};
