var app = require('/namespace');
var start = require('/modules/start');

exports.launch = function() {
	//define small, medium, large screens
	//Ti.API.info('start: ' + JSON.stringify(start));
	var win = start.Window;
	win.open();
	/** /
	setTimeout(function(){
		win.refresh();	
	},
	3000
	);
	/**/
	/** /
	// later on
	if something happens
		start.Views.rss.refresh();
	/**/
};