import { useState } from 'react';

type AccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        TOGGLE
      </button>
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>---{props.title}---</h3>;
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
