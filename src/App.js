// import React from "react"; orig doesn't good. ReactJs Error 'Component' is not defined no-undef.
//https://wsvincent.com/react-counter/
import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Counter /> */}
                {/* <Counter count={5} /> //prop */}
                <Counter />
            </div>
        );
    }
}

class Counter extends Component {
    // state = {
    //     count: 42,
    // };

    state = {
        count: 0,
    };

    // handleClick = () => {
    //     this.setState(({ count }) => ({
    //         count: count + 1,
    //     }));
    // };

    handleClick = () => {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        // return <button>0</button>;
        // return <button>{this.props.count}</button>;
        // return <button>{this.state.count}</button>;
        // return (
        //     <button onClick={alert("Click me...")}>{this.state.count}</button>
        // );
        // return (
        //     <button onClick={() => alert("Button clicked!")}>
        //         {this.state.count}
        //     </button>
        // );
        // return (
        //     <button
        //         onClick={() =>
        //             this.setState({ counter: this.state.counter + 1 })
        //         }
        //     >
        //         {this.state.count}
        //     </button>
        // );
        return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
}

export default App;

// props
// Props are a way to pass read-only data from a parent to a child component. They are a good intermediate step before jumping into state, which is how we will eventually make our counter dynamic.
// We can add a count prop to our counter and set it to a value of 5. Then we can reference this prop as {this.props.count} in our button. Props are automatically passed down from parent to child component upon rendering.

//We initially created a static version of our project. Then we added in props, which are read-only. Our event handler was wired up and used an arrow function so that it only worked when selected, not on page load which is the default behavior for any function within render. Then added in an initial state and could make a one word change to our count reference from this.props.count to this.state.count. And finally we created a custom function outside of the render method that applied logic to our event and updated the state via setState().
