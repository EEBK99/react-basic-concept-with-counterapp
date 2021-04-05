import React, { Component } from 'react';
// props used to send or recieve data between components while state is local 
//      so the state properties or its data can only be used within component

// we use one "source of truth" bt removing local states, so for this we make named controlled component
//     which recieves data through props and send data through events and this controlled component is entirely controlled by its parent
class Counter extends Component {
    // here commented local state to make one source of truth
    // state = {
    //     value: this.props.counter.value
    //     // count:0
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };

    // style = {
    //     fontSize: 30,
    //     fontWeight: 'bold'
    // }


    // renderTags(){
    //     if (this.state.tags.length===0) return <p>There are no tags!</p>

    //     return (
    //         <ul>
    //             {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //         </ul>
    //     );
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // here commented method because local state no more to make one source of truth
    // handleIncrement = (product) => {
    //     // console.log('Increment Clicked', this);
    //     // console.log(product);
    //     this.setState({value: this.state.value + 1});
    // }

    // componentDidUpdate concept example here
    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            // Ajax calls and get new data from the server
        }
    }

    // componentWillUnmount concept example here
    componentWillUnmount(){
        console.log('Counter-Unmount');
    }


    
    render() {
        console.log("Counter-Rendered"); 


        // let classes = this.getBadgeClasses();
        // console.log("props", this.props);

        return (
            <div className="container mb-5 text-center bg-secondary">
                <h4 className="text-warning">Item no. {this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* here done changings in onClick to make it handle by props */}
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-primary btn-sm m-2">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}

                {/* doing conditional rendering.... if want to use this uncomment below code and also uncomment its specific method above */}
                {/* {this.state.tags.length===0 && "Please create a new tag!"}
                {this.renderTags()} */}

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // here commented local state using as local state is removed and we use props
        // classes += (this.state.value === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
 
    formatCount(){
        // const {value: varcount} = this.state;
        const {value: varcount} = this.props.counter;
        return varcount === 0 ? 'zero' : varcount;
    }
}

export default Counter;