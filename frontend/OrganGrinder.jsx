var KeyListener = require('./util/KeyListener');
var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/Organ');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <div>
      {KeyListener.keyUp()}
      {KeyListener.keyDown()}
    <Organ/>
    </div>,
    document.getElementById("content")
  );
});
