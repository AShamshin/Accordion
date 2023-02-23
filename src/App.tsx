import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import './App.css';
import { OnOf } from './components/OnOf/OnOf';
import UncontrolledAccordion from './components/Accordion/SelfControlledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';

export type AType = boolean;

function App() {
  const [a, setA] = useState<AType>(false);
  const halder = (a: any) => {
    setA(a);
  };

  return (
    <div className='App'>
      {/* <PageTitle title={'This is APP component'} />
      <PageTitle title={'My friends'} />
      Article 1
      <Rating value={3} /> */}
      {/* <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} /> */}
      <UncontrolledAccordion titleValue={'Menu'} />
      <UncontrolledAccordion titleValue={'Users'} />
      <UncontrolledRating />
      {/* <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
      {/* <OnOf /> */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1> {props.title}</h1>;
}
export default App;
