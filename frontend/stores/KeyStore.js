var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _keys = [];
var KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "KEY_PRESSED":
      addKey(payload.key);
      KeyStore.__emitChange();
      break;
    case "KEY_RELEASED":
      removeKey(payload.key);
      KeyStore.__emitChange();
      break;
  }
};

KeyStore.keys = function() {
  return _keys.slice();
};

function addKey(key) {
  if (_keys.indexOf(key) === -1) {
    _keys.push(key);
  }
}

function removeKey(key) {
  var idx = _keys.indexOf(key);
  _keys.splice(idx, 1);
}

window.KeyStore = KeyStore;
module.exports = KeyStore;
