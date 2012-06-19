var View = require('/lib/ui/View');
var teaser = View.extend({
	refresh: function(){
		this.view.backgroundColor = 'red';
	}
});

module.exports = teaser;