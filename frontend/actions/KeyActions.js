var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(key) {
    AppDispatcher.dispatch( {
      actionType: "KEY_PRESSED",
      key: key
    });
  },
  keyReleased: function(key) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      key: key
    });
  },
  keyDifference: function(pressedKeys, releasedKeys) {
    pressedKeys.map(function(key){
      KeyActions.keyPressed(key);
    });
    releasedKeys.map(function(key){
      KeyActions.keyReleased(key);
    });
  }
};

module.exports = KeyActions;
