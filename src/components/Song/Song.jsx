import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <div className="song">
        <h3>{this.props.title}</h3>
        <p>Artista: {this.props.artist}</p>
        <p>Álbum: {this.props.album}</p>
        <p>Duración: {this.props.duration}</p>
      </div>
    );
  }
}

export default Song;