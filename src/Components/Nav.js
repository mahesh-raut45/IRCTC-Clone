import { Component } from "react";
import "./Nav.css";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>IRCTC</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export { Nav };
