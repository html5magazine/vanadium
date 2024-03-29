var _ = require('/lib/underscore');
var app = require('/namespace');
var StartWindow = require('/views/StartWindow');
var Teaser = require('/views/Teaser');
var Slider = require('/views/Slider');
var Label = require('/lib/ui/Label');

var Start = app.module();
Start.Window = new StartWindow({
	backgroundColor: 'white',
	exitOnClose: true
});
Start.Views.Teaser = new Teaser({
	image: 'image1.png',
	height: '50%'
});
Start.Views.Slider = new Slider({
	backgroundColor: 'black',
	height: '50%',
	top: '50%'
});
var label = Label.extend({
	initialize: function(){
		Ti.API.info('label initialize called 3: ' + JSON.stringify(this.view));
		_.bindAll(this, 'click');
		this.view.addEventListener('click', this.click);
	},
	click: function(){
		app.publish('library:open');
	}
});
var label2 = new label({
	text: 'open library'
});

Start.Window.add('teaser', Start.Views.Teaser);
Start.Window.add('slider', Start.Views.Slider);
Start.Window.add('label2', label2);
	
module.exports = Start;
