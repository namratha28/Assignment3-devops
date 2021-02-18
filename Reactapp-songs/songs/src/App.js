import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Song from './Pages/Song.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Song/>
      </React.Fragment>
    );
  }
}

export default App; 
