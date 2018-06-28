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

You have seen a component rendered before, though, but not by another component. Instead, you've seen a component rendered by ReactDOM.render().

When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.