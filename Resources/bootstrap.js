var app = require('/namespace');
var start = require('/modules/start');
var library = require('/modules/library');

exports.launch = function() {
	//define small, medium, large screens
	start.Window.open();
	
	app.subscribe('library:open', function(){
		library.Window.open();
	});
	app.subscribe('library:close', function(){
		library.Window.close();
	});
	setTimeout(function(){
		start.Window.refresh();	
	},
	3000
	);
};