var React = require('react');
var Key = require('./Key');
var Tones = require('../constants/Tones');

var Organ = React.createClass({

  render: function() {
    return (
      <div>
        {Object.keys(Tones).map(function(note, idx){
          var classes = note.length > 2 ? "key sharp" : "key";
          return <Key className={classes} key={idx} noteString={note}/>;
        })}
      </div>
    );
  }

});

module.exports = Organ;
