import * as React from 'react';
import reactLogo from '../assets/react.svg';

import styles from "./Header.module.css";

export default class Header extends React.Component {
  public render() {
    return (
        <header className={styles.header}>
            <h1>ToDo React</h1>
            <div>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className={styles.logo} alt="React logo" />
              </a>
            </div>
        </header>
    );
  }
}
