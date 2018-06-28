# ReactJs: Components rendering other components

A React application can contain dozens, or even hundreds, of components.

Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.In other words, React apps are made out of components, but what makes React special isn't components themselves. What makes React special is the ways in which components interact.


## A Component in a Render Function
Here is a .render() method that returns an HTML-like JSX element:

`class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}`

You've seen render methods return <div></div>s, <p></p>s, and <h1></h1>s, just like in the above example.

Render methods can also return another kind of JSX: component instances.

`class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}`

In the above example, Crazy's render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.


## Apply a Component in a Render Function
This is new territory! You've never seen a component rendered by another component before.

You have seen a component rendered before, though, but not by another component. Instead, you've seen a component rendered by ReactDOM.render(). When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.

### Example
Two files ProfilePage.js and NavBar.js.

To make  <ProfilePage /> render a <NavBar /> in the ProfilePage.js file, you simply make ProfilePage's render method return a <NavBar /> instance.

`//NavBar.js
import React from 'react';
class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });
    return <nav>{navLinks}</nav>;
  }
}`

`ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      //make ProfilePage's render method return a <NavBar /> instance
      return <NavBar />;
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}`
However, theirs is an issue with our code.

## Requiring A File
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can't see each other. This is a problem! 

You just added an instance of the NavBar component class. But since you're in ProfilePage.js, JavaScript has no idea what NavBar means. If you want to use a variable that's declared in a different file, such as NavBar, then you have to import the variable that you want. To import a variable, you can use an import statement:

`import { NavBar } from './NavBar.js';`

We've used import before, but not like this! Notice the differences between the above line of code and this familiar line:

import React from 'react';
The first important difference is the curly braces around NavBar. We'll get to those soon! The second important difference involves the contents of the string at the end of the statement: 'react' vs './NavBar.js'.

If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.

If your filepath doesn't have a file extension, then ".js" is assumed. So the above example could be shortened:

import { NavBar } from './NavBar';
**One final, important note**: None of this behavior is specific to React! Module systems of independent, importable files are a very popular way to organize code. React's specific module system comes from ES6. 


## 