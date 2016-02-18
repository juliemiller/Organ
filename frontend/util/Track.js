var KeyActions = require('../actions/KeyActions');

function Track(attributes){
  this.name = attributes["name"];
  this.roll = attributes["roll"];
}

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = new Date();
  this.roll.push({timeSlice: 0.00, notes: []});
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.addNotes = function (notes) {
  var time = new Date();
  var timeslice = (time - this.startTime )/ 1000;
  this.roll.push({timeSlice: timeslice, notes: notes});
};

function keyDifference(key1, key2){
  var keyDiff = [];
  key1.forEach(function(key){
    if (key2.indexOf(key) === -1){
      keyDiff.push(key);
    }
  });
  return keyDiff;
}

Track.prototype.Play = function () {
  if (this.interval){
    return;
  }
  var playBackStartTime = new Date();
  var currentNode = 0;
  var that = this;
  this.interval = setInterval(function(){
    if (that.roll.length - 2 === currentNode){
      clearInterval(that.interval);
      that.interval = null;
    }
    else if ((new Date() - playBackStartTime) / 1000 > that.roll[currentNode + 1].timeSlice){
      var removedKeys = keyDifference(that.roll[currentNode].notes, that.roll[currentNode + 1].notes);
      var addedKeys = keyDifference(that.roll[currentNode + 1].notes, that.roll[currentNode].notes);
      KeyActions.keyDifference(addedKeys, removedKeys);
      currentNode++;
    }
  }, 100);
};

module.exports = Track;
