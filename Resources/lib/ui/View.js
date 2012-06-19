var _ = require('/lib/underscore');
var BaseView = require('/lib/ui/BaseView');
var viewOptions = {
	backgroundColor: 'red',
	top: 0,
	left: 0
};
var Component = function(options){
	this.view = Ti.UI.createView(_.extend(viewOptions, options));
	Ti.API.info('view constructor called 1: ' + JSON.stringify(this.view));
	BaseView.apply(this, [options]);
}
_.extend(Component.prototype, BaseView.prototype, {
	// other props here
	
});
Component.extend = BaseView.extend;

module.exports = Component;

