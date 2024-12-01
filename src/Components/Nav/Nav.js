import { Component } from "react";
import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
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
