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