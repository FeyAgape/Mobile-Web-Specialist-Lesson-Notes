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
