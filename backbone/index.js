/* Model */
/*console.log('Backbone.Model: ');
console.dir(Backbone.Model);
var model = new Backbone.Model();
console.log('model: ');
console.dir(model);

var Note = Backbone.Model.extend({

  initialize: function() {},

  author: function() {},

  type: 'note'

},{
	classProp: 'classProp'
});
console.log('Note: ');
console.dir(Note);
var note = new Note();
console.log('note: ');
console.dir(note);
var customNote = new Note({attr: 'attr'}, {option: 'option'});
console.log('custom note: ');
console.dir(customNote);*/

/* View */
console.log('Backbone.View: ');
console.dir(Backbone.View);
var DocumentRow = Backbone.View.extend({

  tagName: "li",

  className: "document-row",

  events: {
    "click .icon":          "open"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  func: function(){}
});
console.log('DocumentRow: ');
console.dir(DocumentRow);
var documentRow = new DocumentRow({
	id: 'row',
	model: new Backbone.Model()
});
console.log('document row: ');
console.dir(documentRow);