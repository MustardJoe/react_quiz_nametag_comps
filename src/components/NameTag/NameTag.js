import React, { Component } from 'react';
import TextSelector from '../FormThing/TextSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import Shape from '../Shape/Shape';

export default class NameTag extends Component {
  state = {
    color: '',
    backgroundColor: '',
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  handleBackgroundColorChange = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  }

  render() {
    const { backgroundColor, color } = this.state;

    return (
      <>
        <p>name:</p>
        <TextSelector />
        <ColorSelector 
          color={color}
          handleColorChange={this.handleColorChange}
          backgroundColor={backgroundColor}
          handleBackgroundColorChange={this.handleBackgroundColorChange}/>
        <Shape />
      </>
    ); 

  }
}
