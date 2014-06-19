// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // debugger;
    // console.log(this);
    this.on('dequeue', function(modelObject) {
    // remove model from queue
      this.remove(modelObject);
    // if song playing, play first song
      this.playFirst();
      // console.log(modelObject);
    });

    this.on('add', function(modelObject) {
      if (this.length === 1) {
        this.playFirst();
      }
      // add model to queue
      // console.log(modelObject);
      // if no song playing, play first song
    });

  },

  playFirst: function() {
    if (this.models.length >= 1) {
      this.models[0].play();
    }
  },

});
