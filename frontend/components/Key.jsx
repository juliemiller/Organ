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
    var listener = KeyStore.addListener(this.keyPlaying);
    this.setState({ note: note, keyPlayingListener: listener});
  },

  componentWillUmount: function() {
    this.keyPlayingListener.remove();
    this.setState({keyPlayingListener: null});
  },

  keyPlaying: function() {
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
