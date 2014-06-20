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

    this.on('upQueue', function(modelObject) {
      //only do this if length of the queue is > 2
      var index = this.indexOf(modelObject);
      if (this.length > 2 && index > 1) {
        var temp = this.models[index];
        this.models[index] = this.models[index - 1];
        this.models[index - 1] = temp;
      }
      this.trigger('add');
    });


    this.on('downQueue', function(modelObject) {
      console.log('downQueue pressed');
      console.log(this);
      console.log(model);
    });

  },

  playFirst: function() {
    if (this.models.length >= 1) {
      this.models[0].play();
    }
  },

});
