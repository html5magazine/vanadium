var _ = require('/lib/underscore');
var BaseView = require('/lib/ui/BaseView');
var viewOptions = {
	backgroundColor: 'red',
	exitOnClose: false
};
var Component = function(options){
	this.view = Ti.UI.createWindow(_.extend(viewOptions, options));
	//Ti.API.info('Window constructor called 1: ' + JSON.stringify(this.view));
	BaseView.apply(this, [options]);
}
_.extend(Component.prototype, BaseView.prototype, {
	// other props here
	open: function(options){
		this.view.open(options || {});
	},
	close: function(options){
		this.view.close(options || {});
	}
});
Component.extend = BaseView.extend;

module.exports = Component;
