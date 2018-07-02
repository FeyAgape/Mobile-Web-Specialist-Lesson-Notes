import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'Fey';
}
  render () {   
     return <h1>{this.name} is not a Monday person.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));