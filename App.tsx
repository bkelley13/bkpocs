import * as React from 'react';
import './style.css';
import MyButton from './MyButton';
import MyToolbar from './MyToolbar';

export default function App() {
  return (
    <div>
      <h1>A toolbar component</h1>
      <p>
        Tab to the toolbar then use left and right arrows to set focus on
        buttons
      </p>
      <button>This is tabbable, start here</button>
      <MyToolbar>
        <MyButton>Button1</MyButton>
        <MyButton>Button2</MyButton>
        <MyButton>Button3</MyButton>
        <MyButton>Button4</MyButton>
      </MyToolbar>
      <button>This is tabbable, stop here</button>
    </div>
  );
}
