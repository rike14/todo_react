import * as React from 'react';

import styles from "./Footer.module.css";

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className={styles.footer}>
        <p>
          <span>React + TS Todo</span>
        </p>
      </footer>
    );
  }
}
