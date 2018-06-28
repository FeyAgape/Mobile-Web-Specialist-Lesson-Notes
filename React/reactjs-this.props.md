# ReactJs: This.props

## this.props
You will learn another way that components can interact: a component can pass information to another component. Information that gets passed from one component to another is known as "props."


## Access a Component's props
Every component has something called props. A component's props is an object. It holds information about that component. To see a component's props object, you use the expression `this.props`. Here's an example of this.props being used inside of a render method:

`render() {
  console.log("Props object comin' up!");
  console.log(this.props);
  console.log("That was my props object!");
  return <h1>Hello world</h1>;
}`

Most of the information in this.props is pretty useless! But some of it is extremely important, as you'll see.


## Pass `props` to a Component
You can pass information to a React component. How? By giving that component an attribute:

`<MyComponent foo="bar" />`

Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

`<Example message="This is some top secret info." />`

As you can see, to pass information to a component, you need a name for the information that you want to pass. In the above example, we used the name message. You can use any name you want.

If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:

`<Greeting myInfo={["top", "secret", "lol"]} />`

In this next example, we pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:

`<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />`

### example
`import React from 'react';
import ReactDOM from 'react-dom';
class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}
// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp="Hello" />,
  document.getElementById('app')
);`


## Render a Component's props
You just passed information to a component's props object! You will often want a component to display the information that you pass.

Here's how to make a component display passed-in information:

1.  Find the component class that is going to receive that information.
2.  Include this.props.name-of-information in that component class's render method's return statement.

### example 
`import React from 'react';
import ReactDOM from 'react-dom';
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);`


## Pass props From Component To Component
You have learned how to pass a prop to a component:

`<Greeting firstName="Esmerelda" />`

You have also learned how to access and display a passed-in prop:

`render() {
  return <h1>{this.props.firstName}</h1>;
}`

The most common use of props is to pass information to a component, from a different component. You haven't done that yet, but it's very similar to what you've seen already. 

A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words `prop` and `props`. Unfortunately, this is pretty inevitable. `props` is the name of the object that stores passed-in information. `this.props` refers to that storage object. At the same time, each piece of passed-in information is called a `prop`. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information 

In this exercise, you will pass a prop from one component to another.