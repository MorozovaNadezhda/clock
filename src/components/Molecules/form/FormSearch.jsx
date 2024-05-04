import React, { useRef } from 'react';
import { Input, Button } from '../../Atoms/Atoms';
import Watch from '../Watch/Watch';
import { rand } from 'usid';

const Form = ({ data }) => {
  const inputNameRef = useRef();
  const inputTimeZoneRef = useRef();

  const { childData, offset, onAdd } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    let timeName = inputNameRef.current.value;

    if (timeName === '') {
      return;
    }
    let timeZone = inputTimeZoneRef.current.value
      ? inputTimeZoneRef.current.value
      : inputTimeZoneRef.current;

    const propsWatch = {
      id: rand(),
      time: timeName,
      timeZone: timeZone,
      offset,
    };

    const watch = new Watch(propsWatch);

    onAdd(watch);

    inputNameRef.current.value = '';
    inputTimeZoneRef.current.value = 0;
  };

  const handleInput = (event) => {
    event.preventDefault();
    event.target.type === 'text'
      ? (inputNameRef.current = event.target)
      : (inputTimeZoneRef.current = event.target);
  };

  return (
    <React.Fragment>
      <div className='form-field-wrapper'>
        <form onSubmit={handleSubmit} className={childData.type + '-forms'}>
          <Input
            key={rand()}
            className='title-time'
            name={'time'}
            label={childData.titleTime}
            type='text'
            onChange={handleInput}
            value=''
            ref={inputNameRef}
          />
          <Input
            ref={inputTimeZoneRef}
            key={rand()}
            className='title-zone'
            name={'timeZone'}
            label={childData.titleZone}
            type='number'
            min='-12.00'
            max='14.00'
            step='1'
            value={0}
            onChange={handleInput}
          />
          <Button
            key={rand()}
            id={rand()}
            className='form-add'
            text='Добавить'
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
