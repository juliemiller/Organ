var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _keys = [];
var KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "KEY_PRESSED":
      addKey(payload.key);
      break;
    case "KEY_RELEASED":
      removeKey(payload.key);
      break;
  }
};

KeyStore.keys = function() {
  return _keys.slice();
};

function addKey(key) {
  if (_keys.indexOf(key) === -1) {
    _keys.push(key);
    KeyStore.__emitChange();
  }
}

function removeKey(key) {
  var idx = _keys.indexOf(key);
  _keys.splice(idx, 1);
  KeyStore.__emitChange();
}

window.KeyStore = KeyStore;
module.exports = KeyStore;
