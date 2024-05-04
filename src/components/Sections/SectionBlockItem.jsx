import React from 'react';
import { Link, Button } from '../Atoms/Atoms';
import Watch from '../Molecules/Watch/Watch';
import { rand } from 'usid';

const SectionBlockItem = (props) => {
  console.log(props, 'secI');
  return (
    <div key={rand()} className={props.className + '-card'}>
      <div key={rand()} className={props.className + '-header'}>
        <Link
          key={rand()}
          {...props}
          text={props.time}
          tag='h5'
          className={props.className + '-title'}
        ></Link>

        <div className={props.className + '__button-block'}>
          <Button
            id={props.id}
            key={rand()}
            name={'X'}
            className={props.className + '-close'}
            onClick={props.onRemove}
          />
        </div>
      </div>
      <div key={rand()} className={props.className + '-content'}>
        <Watch key={rand()} {...props} />
      </div>
    </div>
  );
};

export default SectionBlockItem;
