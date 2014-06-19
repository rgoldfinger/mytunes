// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // debugger;
    // console.log(this);
    this.on('dequeue', function(modelObject) {
    // remove model from queue
      this.remove(modelObject);
    // if song playing, play first song

      console.log(modelObject);
    });

    this.on('add', function(modelObject) {
      // add model to queue
      console.log(modelObject);

      // if no song playing, play first song

    });
  },

  playFirst: function() {
    this.models[0].play();
  },



  // endSong: function() {
  //   this.models.shift();
  //   this.playFirst();
  // },

});
