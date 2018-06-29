import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
 color: 'darkred',
  background: 'lightblue'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe, 
  document.getElementById('app')
);