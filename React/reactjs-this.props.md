# ReactJs: This.props

## this.props
You will learn another way that components can interact: a component can pass information to another component. Information that gets passed from one component to another is known as "props."


## Accessing a Component's props
Every component has something called props. A component's props is an object. It holds information about that component. To see a component's props object, you use the expression `this.props`. Here's an example of this.props being used inside of a render method:

`render() {
  console.log("Props object comin' up!");
  console.log(this.props);
  console.log("That was my props object!");
  return <h1>Hello world</h1>;
}`

Most of the information in this.props is pretty useless! But some of it is extremely important, as you'll see.


## Passing `props` to a Component
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


## Rendering a Component's props
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


## Passing props From Component To Component
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

### example
`//App/js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Ruby" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);`

`//Greeting.js
import React from 'react';
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}`
You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!


## Rendering Different UI Based on props
You can do more with props than just display them. You can also use props to make decisions.

### example
`//Welcome.js
import React from 'react';
export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>
          hello sir it is truly great to meet you here on the web
        </h2>
      );
    } else {
      return (
        <h2>
          WELCOME "2" MY WEB SITE BABYYY!!!!!
        </h2>
      );
    }
  }
}`

`//Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';
class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}
ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);`


`Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';
export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}`

`//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);`


## Putting an Event Handler in a Component Class
You can, and often will, pass functions as props. It is especially common to pass event handler functions.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.

`import React from 'react';
class Example extends React.Component {
  handleEvent() {
    alert(``I am an event handler.
      If you see this message,
      then I have been called.``);
  }
  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}`

### Example
`//button.js
import React from 'react';
export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}`

**before**
`//Talker.js  
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
function talk () {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
class Talker extends React.Component {
  render() {
    return <Button />;
  }
}
ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);`

**after**
`//Talker.js  
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
class Talker extends React.Component {
talk () {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
  render() {
    return <Button />;
  }
}
ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);`
You've defined a new method on the Talker component class


## Pass an Event Handler as a prop
You've defined a new method on the Talker component class. Now you're ready to pass that function to another component. You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

**In order to pass an event handler function as a prop, you have to define an event handler before you can pass one anywhere.** 

`//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button talk={this.talk} />;
  }
}
ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);`
You just passed a function from <Talker /> to <Button />.


## Receiving an Event Handler as a prop
In Button.js. Notice that Button renders a <button></button> element. If a user clicks on this <button></button> element, then you want your passed-in talk function to get called. That means that you need to attach talk to the <button></button> as an event handler.

How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute's name should be something like onClick or onHover. The attribute's value should be the event handler that you want to attach.

`//Button.js
import React from 'react';
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}`


## handleEvent, onEvent, and this.props.onEvent
Let's talk about naming things. When you pass an event handler as a prop, as you just did, there are two names that you have to choose. Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself. Look at Talker.js, talk() this is our event handler. We chose to name it talk.

The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name. For our prop name, we also chose talk 

`return <Button talk={this.talk} />;`

These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention, but you should understand it when you see it. Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."

If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:

`class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}`

Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:

`class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
  render() {
    return <Child onHover={this.handleHover} />;
  }
}`

### Example
`//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}
ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);`


## this.props.children
Every component's props object has a property named children. `this.props.children` will return everything in between a component's opening and closing JSX tags.

So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

`//BigButton.js
import React from 'react';
import { LilButton } from './LilButton';
class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}
// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>
// Example 2
<BigButton>
  <LilButton />
</BigButton>
// Example 3
<BigButton />`

Look at BigButton.js. In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."

In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>'s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.