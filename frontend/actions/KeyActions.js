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
  }
};

module.exports = KeyActions;
