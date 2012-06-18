var _ = require('/lib/underscore');
var Backbone = require('/lib/backbone');

$ = function(){
	return {
		0 : {},
		attr: function(a){
			return {};
		}
	}
};
Backbone.setDomLibrary($);
//default options

var BaseView = function(options){
	this.view = {};
	Backbone.View.apply(this, [options]);
}
_.extend(BaseView.prototype, Backbone.View.prototype, {
	// other props here
	add: function(child){
		this.view.add(child.component.view);
		Ti.API.info('add child in base: ' + JSON.stringify(child.component.view));
	},
	remove: function(child){
		this.view.remove(child);
	}
});
BaseView.extend = Backbone.View.extend;

module.exports = BaseView;