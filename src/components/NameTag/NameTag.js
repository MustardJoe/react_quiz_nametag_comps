import React, { Component } from 'react';
import TextSelector from '../FormThing/TextSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import Shape from '../Shape/Shape';

export default class NameTag extends Component {

  render() {
    return (
      <>
        <p>name:</p>
        <TextSelector />
        <ColorSelector />
        <Shape />
      </>
    ); 

  }
}
