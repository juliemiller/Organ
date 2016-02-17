var KeyActions = require('../actions/KeyActions');

var Mapping = {
  65: 'C4',
  83: 'D4',
  68: 'E4',
  70: 'F4',
  71: 'G4',
  72: 'A4',
  74: 'B4',
  87: 'C4sharp',
  69: 'D4sharp',
  84: 'F4sharp',
  89: 'G4sharp',
  85: 'A4sharp'
};

var KeyListener = {
  keyUp: function(){
    $(document).on("keyup", function(e) {
      var key = Mapping[e.keyCode];
      return KeyActions.keyReleased(key);
    });
  },
  keyDown: function(){
    $(document).on("keydown", function(e) {
      var key = Mapping[e.keyCode];
      return KeyActions.keyPressed(key);
    });
  }
};

module.exports = KeyListener;
