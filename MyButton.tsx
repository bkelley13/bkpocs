import * as React from 'react';
import { ItemContext } from './itemContext';
import { useRef, useEffect, useState } from 'react';

const MyButton = (props) => {
  const compReference = useRef(null);
  const [showFocus, setShowFocus] = useState(false);

  useEffect(() => {
    if (showFocus) {
      compReference.current.focus();
      console.log('focus to ' + props.children);
    }
  }, [showFocus]);

  return (
    <ItemContext.Consumer>
      {({ hasFocus }) => {
        if (hasFocus) {
          console.log('butto has focus ' + props.children);
          setShowFocus(true);
        } else {
          setShowFocus(false);
        }
        return (
          <button
            ref={compReference}
            tabIndex={-1}
            onClick={() => alert('clicked on ' + props.children)}
          >
            {props.children}
          </button>
        );
      }}
    </ItemContext.Consumer>
  );
};
export default MyButton;
