import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    
    // we cut local state and methods from here and paste it to app.js for "lift up state" to make one parent

    render() {
        console.log("Counters-Rendered"); 

        // here we are doing "Object destructuring to make simple use of props see below"
        const {onReset, counters, onDelete, onIncrement} = this.props;

        return ( 
            <div className="container bg-light p-3">
                {/* we change everyrhing from this.states to this.props as parent is now app.js so we need props to send data */}
                <button
                    //  onClick={this.props.onReset}
                     onClick={onReset}
                     className="btn btn-success btn-sm m-2">
                    Reset
                </button>
                {/* here we map the counters component local state object on child counter component through 
                assigning on attributes a specific functionality and then we use these by using props  */}
                {counters.map(counter =>
                    <Counter 
                        key={counter.id} 
                        // onDelete={this.props.onDelete} 
                        onDelete={onDelete} 
                        // onIncrement={this.props.onIncrement}
                        onIncrement={onIncrement}
                        counter={counter}
                    >
                        
                    </Counter>)}
            </div>
         );
    }
} 

export default Counters;