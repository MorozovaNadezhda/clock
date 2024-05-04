import React, { useState } from 'react';
import Form from './Molecules/form/FormSearch';
import SectionBlock from './Sections/SectionBlock';
import SectionBlockItem from './Sections/SectionBlockItem';
import Watch from './Molecules/Watch/Watch';
import { rand } from 'usid';

const offset = 4;
const propsWatch1 = { id: '123', time: 'Moskow', timeZone: '3', offset };

const moskow = new Watch(propsWatch1);

const TimePanel = (data) => {
  const [watches, setWatches] = useState([moskow]);

  const handleAdd = (watch) => {
    let copyWatches = [...watches];

    let idx = copyWatches.findIndex((i) => i.date === watch.time);
    if (idx === -1) {
      setWatches((prev) => [...prev, watch]);
    }
  };

  const handleRemove = (id) => {
    setWatches((prev) => prev.filter((o) => o.id !== id));
  };

  const props = {
    childData: data,
    offset: offset,
    onAdd: handleAdd,
  };
  return (
    <>
      <div className='timepanel-container'>
        <Form key={rand()} data={props}></Form>
        <SectionBlock
          key={rand()}
          className='watches'
          handleRemove={handleRemove}
        >
          {watches.map((item) => {
            return (
              <SectionBlockItem
                key={rand()}
                {...item}
                className={'watch'}
                onRemove={handleRemove}
              />
            );
          })}
        </SectionBlock>
      </div>
    </>
  );
};
export default TimePanel;
/*/*<Watch key={rand()} {...item} />*/
