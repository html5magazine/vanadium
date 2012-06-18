var app = require('/namespace');
var Component = require('/lib/ui/Component');
var Window = require('/lib/ui/Window');
var Label = require('/lib/ui/Label');
	var Start = app.module();
	/**/
	var myWin = Window.extend({
		refresh: function(){
			this.view.backgroundColor = 'green';
		}
	});
	/** /
	var win = new Window({
		backgroundColor: 'white'
	});
	/**/
	
	var win = new Component(new myWin({
		backgroundColor: 'white'
	}));

	Start.Window = win;
	/**/
	var label = new Component(new Label({
		text: 'hallo'
	}));
	win.add('label1', label);
	/**/
	
module.exports = Start;
