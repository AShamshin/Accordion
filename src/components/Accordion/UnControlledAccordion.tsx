import { useReducer, useState } from 'react';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type AccordionPropsType = {
  titleValue: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  //const [collapsed, setCollapsed] = useState<boolean>(false);
  let [state, dispatch] = useReducer(reducer, { collapsed: false });
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: TOGGLE_COLLAPSED });
        }}
        // onClick={() => {
        //   setCollapsed(!collapsed);
        // }}
      />

      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={() => props.onClick()}>---{props.title}---</h3>;
}
function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>31</li>
    </ul>
  );
}
export default UncontrolledAccordion;
