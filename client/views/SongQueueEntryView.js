// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',
  className: 'queue-entry',

  template: _.template('<span><%= artist %> &ndash; </span>'
        + '<span><%= title %></span>'
        + '<span class="queue-buttons">'
        + '<span class="fa fa-chevron-up up-queue"></span>'
        + '<span class="fa fa-chevron-down down-queue"></span>'
        + '<span class="fa fa-minus dequeue"></span>'
        + '</span>'
        ),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    },
    'click .up-queue': function() {
      this.model.upQueue();
    },
    'click .down-queue': function() {
      this.model.downQueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
