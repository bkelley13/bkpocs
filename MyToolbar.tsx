import * as React from 'react';
import { useState } from 'react';
import { ItemContext } from './itemContext';

const MyToolbar = (props) => {
  let count = props.children.length;
  const [focusIndex, setFocusIndex] = useState(0);
  const [focus, setFocus] = useState({ hasFocus: false });

  const handleKey = (event) => {
    if (event.key === 'ArrowRight') {
      setFocusIndex((focusIndex + 1) % count);
    } else if (event.key === 'ArrowLeft') {
      setFocusIndex(Math.abs(count + focusIndex - 1) % count);
    }
  };

  return (
    <div
      style={{ borderWidth: '2px', padding: '2px', borderStyle: 'solid' }}
      tabIndex={0}
      onKeyDown={handleKey}
    >
      {props.children.map((child, index) => {
        console.log(
          'child with index ' + index + ' focusIndex = ' + focusIndex
        );
        return (
          <ItemContext.Provider value={{ hasFocus: focusIndex == index }}>
            {child}
          </ItemContext.Provider>
        );
      })}
      <p>focus is at {focusIndex}</p>
    </div>
  );
};
export default MyToolbar;
