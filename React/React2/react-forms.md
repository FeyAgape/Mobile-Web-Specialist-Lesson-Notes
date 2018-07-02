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
export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    return (
      <input 
        onChange={this.handleChange} 
        type="text" />
    );
  }
}
`