var AppWindow = require('/ui/AppWindow');
var app = require('/namespace');
exports.launch = function() {
	var win = new AppWindow();
	var label = Ti.UI.createLabel({text: 'hallo'});
	var labelToken = app.subscribe('label:change', function(data){
		label.text = data.text;
		//app.unsubscribe(labelToken);
		setTimeout(function(){
			app.publish('label:change', {text: 'ha not unsubscribed'});
			app.unsubscribe(labelToken);
		},
		3000
		);
	});
	win.add('label1', label);
	win.open();
	setTimeout(function(){
		app.publish('label:change', {text: 'huhu'});
		//win.remove('label1');
	},
	3000
	);
	setTimeout(function(){
		win.remove('label1');
		win.close();
	},
	10000
	);
	
};