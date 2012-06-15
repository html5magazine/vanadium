var ui = require('/ui/Component');
var app = require('/namespace');
function AppWindow(){
	var args = {
		navBarHidden:true,
		exitOnClose:true
	};
	var win = new ui.Component(Ti.UI.createWindow(args));
	app.module.windows['main:window'] = win;
	
	return win;
}
module.exports = AppWindow;