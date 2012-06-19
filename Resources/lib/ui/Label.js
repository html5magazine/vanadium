var _ = require('/lib/underscore');
var BaseView = require('/lib/ui/BaseView');
var viewOptions = {
	'text': 'label1'
};
var Component = function(options){
	this.view = Ti.UI.createLabel(_.extend(viewOptions, options));
	Ti.API.info('label constructor called 1: ' + JSON.stringify(this.view));
	BaseView.apply(this, [options]);
}
_.extend(Component.prototype, BaseView.prototype, {
	// other props here
	
});
Component.extend = BaseView.extend;

module.exports = Component;

