import * as React from 'react';

import styles from "./Header.module.css";

export default class Header extends React.Component {
  public render() {
    return (
        <header className={styles.header}>
            <h1>Todo React</h1>
        </header>
    );
  }
}
