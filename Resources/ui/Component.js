var _ = require('/lib/underscore');
function Component(view, args){
	this.viewList = {};
	this.view = view || Ti.UI.createView(args || {});
	this.attributeList = {};
}

Component.prototype.add = function(name, child){
	this.viewList[name] = child;
	this.view.add(child);
};
Component.prototype.remove = function(name){
	this.view.remove(this.viewList[name]);
	if(this.viewList[name]){
		delete this.viewList[name];
	}
};
Component.prototype.open = function(args){
	if(this.view.open){
		this.view.open(args || {});
	}
};
Component.prototype.close = function(args){
	if(this.view.close){
		this.view.close(args || {});
	}
};
Component.prototype.get = function(key){
	return this.attributeList[key];
};
Component.prototype.set = function(key, value){
	this.attributeList[key] = value;
};

//This should be overridden by any Components which wish to execute custom
//clean up logic, to release their child components, etc.
Component.prototype.onDestroy = function(){
};

//Clean up resources used by this Component
Component.prototype.release = function() {
	//force cleanup on proxy
	this.view = null;

	//run custom cleanup logic
	this.onDestroy();
};

//adding to public interface
exports.Component = Component;