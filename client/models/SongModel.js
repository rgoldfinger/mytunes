// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },
    upQueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('upQueue', this);
  },
    downQueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('downQueue', this);
  },

  ended: function(){
    // debugger;
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});

