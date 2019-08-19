import React, { Component } from 'react';
import TextSelector from '../FormThing/TextSelector';

export default class NameTag extends Component {

  render() {
    return (
      <>
        <p>name:</p>
        <TextSelector />
        <p>greeting:</p>
        <TextSelector />
      </>
    ); 

  }
}
