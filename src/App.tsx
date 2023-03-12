import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import './App.css';
import { OnOf } from './components/OnOf/OnOf';
import UncontrolledAccordion from './components/Accordion/UnControlledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import { OnOfCopy } from './components/OnOf/OnOf copy';

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [on, iiiOn] = useState<any>(false);

  const onClickCallback = (value: any) => {
    alert('Click ' + value);
  };

  return (
    <div className='App'>
      {/* <OnOfCopy on={on} iiiOn={iiiOn} />
      {on.toString()} */}

      {/* <OnOf onChange={iiiOn} />
      {on.toString()} */}

      {/* <PageTitle title={'This is APP component'} />
      <PageTitle title={'My friends'} /> */}

      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}

      {/* <Accordion
        titleValue={'Menu'}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
        collapsed={accordionCollapsed}
      /> */}

      <Accordion
        titleValue={'Users'}
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
        onClick={onClickCallback}
        items={[
          { title: 'Dimych', value: 1 },
          { title: 'Valera', value: 2 },
          { title: 'Artem', value: 3 },
          { title: 'Viktor', value: 4 },
        ]}
      />

      {/* <UncontrolledAccordion titleValue={'Menu'} /> */}

      {/* <UncontrolledAccordion titleValue={'Users'} /> */}

      {/* <UncontrolledRating /> */}
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
