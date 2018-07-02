# React Forms

Think about how forms work in a typical, non-React environment. A user types some data into a form's input fields, and the server doesn't know about it. The server remains clueless until the user hits a "submit" button, which sends all of the form's data over to the server simultaneously.

In React, as in many other JavaScript environments, this is not the best way of doing things.

The problem is the period of time during which a form thinks that a user has typed one thing, but the server thinks that the user has typed a different thing. What if, during that time, a third part of the website needs to know what a user has typed? It could ask the form or the server and get two different answers. In a complex JavaScript app with many moving, interdependent parts, this kind of conflict can easily lead to problems.

In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.


## Input onChange
A traditional form doesn't update the server until a user hits "submit." But you want to update the server any time a user enters or deletes any character.


## Write an Input Event Handler
An event handler is a function that gets called whenever a user enters or deletes any character. It will listen for change events. 

`import React from 'react';
import ReactDOM from 'react-dom';
export class Input extends React.Component {
  constructor(props) {
    super(props);   
    this.state = { userInput: '' };    
    this.handleUserInput = this.handleUserInput.bind(this);
  }  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <Input />,
  document.getElementById('app')
);
`


## Set the Input's Initial State
Any time that someone types or deletes in <input />, the .handleUserInput() method will update this.state.userInput with the <input />'s text. Since you're using this.setState, that means that Input needs an initial state! What should this.state's initial value be?

Well, this.state.userInput will be displayed in the <input />. What should the initial text in the <input /> be, when a user first visits the page? The initial text should be blank! Otherwise it would look like someone had already typed something.


## Update an Input's Value
When a user types or deletes in the <input />, then that will trigger a change event, which will call handleUserInput. That's good! handleUserInput will set this.state.userInput equal to whatever text is currently in the input field. That's also good! There's only one problem: you can set this.state.userInput to whatever you want, but <input /> won't care. You need to somehow make the <input />'s text responsive to this.state.userInput.

Easy enough! You can control an <input />'s text by setting its value attribute.