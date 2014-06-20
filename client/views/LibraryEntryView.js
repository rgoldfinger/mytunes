// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  className: 'library-entry',

  template: _.template('<span><%= artist %> &ndash; </span><span><%= title %></span><span class="enqueue">+</span>'),

  events: {
    'click .enqueue': function() {
      // this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
