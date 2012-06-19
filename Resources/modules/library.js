var _ = require('/lib/underscore');
var app = require('/namespace');
var StartWindow = require('/views/StartWindow');
var Teaser = require('/views/Teaser');
var Slider = require('/views/Slider');
var Label = require('/lib/ui/Label');

var Library = app.module();
Library.Window = new StartWindow({
	backgroundColor: 'red'
});
Library.Views.Teaser = new Teaser({
	image: 'image1.png',
	height: '30%'
});
Library.Views.Slider = new Slider({
	backgroundColor: 'black',
	height: '70%',
	top: '30%'
});
var label = Label.extend({
	initialize: function(){
		Ti.API.info('label initialize called 3: ' + JSON.stringify(this.view));
		_.bindAll(this, 'click');
		this.view.addEventListener('click', this.click);
	},
	click: function(){
		app.publish('library:close');
	}
});
var label2 = new label({
	text: 'close library'
});

Library.Window.add('teaser', Library.Views.Teaser);
Library.Window.add('slider', Library.Views.Slider);
Library.Window.add('label2', label2);
	
module.exports = Library;
