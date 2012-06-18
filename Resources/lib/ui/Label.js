var _ = require('/lib/underscore');
var BaseView = require('/lib/ui/BaseView');
var viewOptions = {
	'text': 'label1'
};

var label = BaseView.extend({
	initialize : function(){
		this.view = Ti.UI.createLabel(_.extend(viewOptions, this.options));
	}
});

module.exports = label;
