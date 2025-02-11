// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
 
    onReceive = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };
   
    render() {
      return (
        <button onClick={this.onReceive}>Coordinates</button>
      );
    }
  }