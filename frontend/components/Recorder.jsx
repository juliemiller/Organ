var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function(){
    return {isRecording: false, track: new Track({name: "thing", roll: []})};
  },


  startRecording: function (){
    this.state.track.startRecording();
    this.setState({
      isRecording: true,
      recordListener: KeyStore.addListener(this.addToRoll)
    });
  },

  addToRoll: function () {
    var notes = KeyStore.keys();
    this.state.track.addNotes(notes);
  },

  stopRecording: function (){
    this.state.track.stopRecording();
    this.state.recordListener.remove();
    this.setState({isRecording: false, recordListener: null});
  },

  play: function () {
    this.state.track.Play();
  },

  render: function() {
    return (
      <div>
        <button onClick={this.play}>Play</button>
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
      </div>
    );
  }

});

module.exports = Recorder;
