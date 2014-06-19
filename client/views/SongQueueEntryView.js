// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',
  className: 'queue-entry',

  template: _.template('<span class="dequeue">X</span>'
        + '<span>(<%= artist %>)</span>'
        + '<span><%= title %></span>'
        // + '<span><button class="dequeue">^</button></span>'
        // + '<span><button class="dequeue">X</button></span>'
        ),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
