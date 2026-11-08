import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Song from "./components/Song.jsx";
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log("¡La aplicación se ha cargado correctamente!");
  }

  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <h2>Mis canciones</h2>

          <div className="song-list">
            <Song
              title="Blinding Lights"
              artist="The Weeknd"
              album="After Hours"
              duration="3:20"
            />

            <Song
              title="As It Was"
              artist="Harry Styles"
              album="Harry's House"
              duration="2:47"
            />

            <Song
              title="Levitating"
              artist="Dua Lipa"
              album="Future Nostalgia"
              duration="3:23"
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;