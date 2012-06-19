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
	this.viewList = {};
	//Ti.API.info('baseView constructor called 2: ' + JSON.stringify(this.view));
	Backbone.View.apply(this, [options]);
}
_.extend(BaseView.prototype, Backbone.View.prototype, {
	// other props here
	add: function(name, child){
		this.viewList[name] = child;
		this.view.add(child.view);
		//Ti.API.info('add child in base: ' + JSON.stringify(child.view));
	},
	remove: function(name){
		if(this.viewList[name]){
			this.view.remove(this.viewList[name]);
			delete this.viewList[name];
		}
	}
});
BaseView.extend = Backbone.View.extend;

module.exports = BaseView;