var _ = require('/lib/underscore');
var BaseView = require('/lib/ui/BaseView');
var viewOptions = {
	backgroundColor: 'red'
};
var window = BaseView.extend({
	initialize : function(){
		this.view = Ti.UI.createWindow(_.extend(viewOptions, this.options));
	},
	open: function(options){
		this.view.open(options || {});
	},
	close: function(options){
		this.view.close(options || {});
	}
});

module.exports = window;
