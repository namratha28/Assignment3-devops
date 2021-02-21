import React from "react";
import Paper from "@material-ui/core/Paper";
import "github-markdown-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Chinmaye from "./Images/Chinmaye.jpg";
import oohaleoohale from "./songs/oohaleoohale.mp3";
import shreya from "./Images/shreya.jpg";
import RaisedButton from 'material-ui/RaisedButton';
import vintunnava from "./songs/vintunnava.mp3";
import kabijo from "./songs/Kabijo.mp3";
import arjith from "./Images/arjith.jpg";

import "../styles/song.css";
import { Component } from "react";
const style = { marginLeft: 1, };

class SongPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        songData: '',
    };
};
  firstSong() {
    fetch('http://localhost:5000/Music/FirstSong',{
      headers: {
        'Content-Type': 'application/html/text',
      }
    })
    .then(response => response.text())
    .then(data => this.setState({
      songData: data
    }));
  }
  secondSong() {
    fetch('http://localhost:5000/Music/SecondSong',{
      headers: {
        'Content-Type': 'application/html/text',
      }
    })
    .then(response => response.text())
    .then(data => this.setState({
      songData: data
    }));
  }
  thirdSong() {
    fetch('http://localhost:5000/Music/ThirdSong',{
      headers: {
        'Content-Type': 'application/html/text',
      }
    })
    .then(response => response.text())
    .then(data => this.setState({
      songData: data
    }));
  }
  render(){
  return (
    <Paper>
    <h1>MY MUSIC ALBUM</h1>
      <div class="main">
      <div class="songs" id="first">
      <h3>
        {" "}
        <FontAwesomeIcon aria-hidden="true" />
        <strong>Oohale Oohale</strong>
        <FontAwesomeIcon aria-hidden="true" />
      </h3>

      <div id="accordion">
        <div class="card-header" id="headingOne" class="main_container">
          <div class="grid-child-0">
            <img src={Chinmaye} width="200" height="200" />
          </div>
          <h5 class="mb-0">
            <div class="songs">
              <div class="bsong" class="grid-container">
                <div class="grid-child-1">
                  <button
                    className="btn btn-danger"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={this.firstSong.bind(this)}
                  >
                    <i>See Lyrics</i>
                  </button>
                </div>
                <div class="grid-child-2">
                  <audio controls>
                    <source src={oohaleoohale} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body" class="lyrics">
          {this.state.songData}
          </div>
        </div>
      </div>
    </div>
        {/* SEcond song vintunnava */}
        <div class="songs">
          <h3>
            <FontAwesomeIcon  aria-hidden="true" />
            <strong>Vintunnava</strong>
            <FontAwesomeIcon aria-hidden="true" />
          </h3>

          <div id="accordion">
            <div class="card-header" id="headingOne" class="main_container">
              <div>
                <img src={shreya} width="200" height="200" />
              </div>
              <h5 class="mb-0">
                <div class="songs" class="grid-container">
                  <div class="bsong" class="grid-child-1">
                  <button
                    className="btn btn-danger"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={this.secondSong.bind(this)}
                  >
                    <i>See Lyrics</i>
                  </button>
                  </div>
                  <div class="grid-child-2">
                    <audio controls>
                      <source src={vintunnava} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </h5>
            </div>
            <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body" class="lyrics">
            {this.state.songData}
            </div>
          </div>
          </div>
        </div>
        {/* Third song kabijobadhal */}
        <div class="songs">
          <h3>
            <FontAwesomeIcon  aria-hidden="true" />
            <strong>KabhiJO</strong>
            <FontAwesomeIcon aria-hidden="true" />
          </h3>

          <div id="accordion">
            <div class="card-header" id="headingOne" class="main_container">
              <div>
                <img src={arjith} width="200" height="200" />
              </div>
              <h5 class="mb-0">
                <div class="songs" class="grid-container">
                  <div class="grid-child-1">
                  <button
                    className="btn btn-danger"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={this.thirdSong.bind(this)}
                  >
                    <i>See Lyrics</i>
                  </button>
                  </div>
                  <div class="grid-child-2">
                    <audio controls>
                      <source src={kabijo} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </h5>
            </div>
            <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body" class="lyrics">
            {this.state.songData}
            </div>
          </div>
          </div>
        </div>
        </div>
    </Paper>
  );
  }
};
export default SongPage;
