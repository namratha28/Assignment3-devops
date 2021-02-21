import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Song from './Pages/Song.js';
import NotFound from './Pages/NotFound.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
    <Switch>
      <Route exact path="/" component={Song} />
      <Route component={NotFound} />
    </Switch>
  </Router>
      </React.Fragment>
    );
  }
}

export default App; 
