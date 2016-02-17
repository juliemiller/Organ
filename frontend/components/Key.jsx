var React = require('react');
var Note = require('../util/Note');
var Tones = require('../constants/Tones');
var KeyStore = require('../stores/KeyStore');

var Key = React.createClass({
  getInitialState: function() {
    return { note: null, playing: false};
  },

  componentDidMount: function(){
    var tone = Tones[this.props.noteString];
    var note = new Note(tone);
    this.setState({ note: note});
    KeyStore.addListener(this.keyPlaying);
  },

  componentWillUmount: function() {
    KeyStore.removeListener(this.keyPlaying);
  },

  keyPlaying: function() {
    console.log(KeyStore.keys());
    if (KeyStore.keys().indexOf(this.props.noteString) !== -1) {
      this.state.note.start();
      this.setState({playing: true});
    } else {
      this.state.note.stop();
      this.setState({playing: false});
    }
  },

  render: function() {
    var classes = this.props.className + (this.state.playing ? " playing" : "");
    return (
      <div className={classes}>{this.props.noteString}</div>
    );
  }

});

module.exports = Key;
