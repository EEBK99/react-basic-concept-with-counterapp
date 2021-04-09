import React, { Component } from "react";
import img from "../img/navbarlogo.png";

//Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.js">
          <img className="" src={img} alt="" width="70" height="70" />
        </a>
        <p className="text-danger">
          Total-Items{" "}
          <span className="badge badge-pill badge-secondary bg-danger">
            {/* {this.props.totalCounters} */}
            {/* as we are using function so first we have to write "props" in function parameters and also remove "this" because this and super only associate with class */}
            {/* {props.totalCounters}               */}
            {/* here we now remove props because we do "destructing arguments" to make it more simple */}
            {totalCounters}
          </span>
        </p>
      </div>
    </nav>
  );
};

// we commented class and make function because we dont have local states so thats we make it a Stateless Functional Component
// class Navbar extends Component {
//     render() {
//     }
// }

export default Navbar;
