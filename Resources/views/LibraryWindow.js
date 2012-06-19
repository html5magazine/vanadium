var Window = require('/lib/ui/Window');
var win = Window.extend({
	refresh: function(){
		this.view.backgroundColor = 'green';
	},
	exitOnClose: true
});

module.exports = win;