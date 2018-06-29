# ReactJs: This.State

## State
React components will often need dynamic information in order to render. Dynamic information is information that can change. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same. props and state are all that you need to set up an ecosystem of interacting React components.