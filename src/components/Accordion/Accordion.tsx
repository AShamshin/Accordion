type AccordionPropsType = {
  titleValue: string;
  onChange: () => void;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onChange={props.onChange}
        //collapsed={props.collapsed}
      />

      {props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
  //collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onChange}>---{props.title}---</h3>;
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
export default Accordion;
