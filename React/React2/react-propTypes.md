# Proptypes

## propTypes is an important React feature.
propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: documentation.

Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.


## Applying PropTypes
`import React from 'react';
export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}
// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};`

Notice the expression this.props.message. From this expression, you can deduce that MessageDisplayer expects to get passed a prop named message. Somewhere, at some time, this code is expected to execute:

`<MessageDisplayer message="something" />`

If a component class expects a prop, then you can give that component class a propType! 

The first step to making a propType is to search for a property named propTypes on the instructions object. If there isn't one, make one! You will have to declare it after the close of your component declaration, since this it will be a static property.

See the example of a propTypes property
`MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};`

Notice that the value of propTypes is an object, not a function!

The second step is to add a property to the propTypes object. For each prop that your component class expects to receive, there can be one property on your propTypes object. MessageDisplayer only expects one prop: message. Therefore, its propTypes object only has one property.


## Adding Properties to PropTypes
What are the properties on propTypes supposed to be, exactly?

The name of each property in propTypes should be the name of an expected prop. In our case, MessageDisplayer expects a prop named message, so our property's name is message. The value of each property in propTypes should fit this pattern:

`React.PropTypes.expected-data-type-goes-here`

Since message is presumably going to be a string, we chose React.PropTypes.string. Notice the difference in capitalization between the propTypes object and React.PropTypes! Each property on the propTypes object is called a propType.

`import React from 'react';
export class Runner extends React.Component {
  render() {
  	let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i){
      return <li key={race + i}>{race}</li>;
    });
    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        { this.props.isMetric && 
          <h2>One Time I Ran {km} Kilometers!</h2> }
        { !this.props.isMetric && 
          <h2>One Time I Ran {miles} Miles!</h2> }
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}
Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};`

Runner has six propTypes! Look at each one. Note that bool and func are abbreviated, but all other datatypes are spelled normally. If you add .isRequired to a propType, then you will get a console warning if that prop isn't sent.

# Example
`import React from 'react';
export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />    
        Author: <span>
          {this.props.author}
        </span><br />        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}
BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired
};`