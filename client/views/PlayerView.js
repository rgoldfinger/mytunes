// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': function() {
      console.log('inside ended');
      this.model.ended();
      this.render();
    }
  },

  initialize: function() {
    this.render();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    if (this.model !== undefined) {
      var url = this.model ? this.model.get('url') : '';
      return this.$el.attr('src', url).after($('<div class="playing-song">' + this.model.get('title') + '</div>'));

    } else {
      console.log('here');
      return $('.playing-song').text('');
    }
  }

});
