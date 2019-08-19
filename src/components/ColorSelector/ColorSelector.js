import React from 'react';
import styles from './ColorSelector.css';

function ColorSelector() {

  const redHandler = () => {
    /* eslint-disable no-console */
    console.log('please pretend the background is red');
  };

  const yellowHandler = () => {
    console.log('please pretend the background is yellow');
  };

  const blueHandler = () => {
    console.log('please pretend the background is blue');
  };

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={redHandler}>Red</button>
      <button className={styles.yellow} onClick={yellowHandler}>Yellow</button>
      <button className={styles.blue} onClick={blueHandler}>Blue</button>
    </section>
  );
}

export default ColorSelector;

