function Component(component, args){
	this.viewList = {};
	this.component = component || Ti.UI.createView(args || {});
	Ti.API.info('main component constructor: ' + JSON.stringify(this.component));
	this.attributeList = {};
}

Component.prototype.add = function(name, child){
	this.viewList[name] = child;
	Ti.API.info('child view: ' + JSON.stringify(child));
	this.component.add(child);
};
Component.prototype.remove = function(name){
	this.component.remove(this.viewList[name]);
	if(this.viewList[name]){
		delete this.viewList[name];
	}
};
Component.prototype.open = function(args){
	if(this.component.open){
		this.component.open(args || {});
	}
};
Component.prototype.close = function(args){
	if(this.component.close){
		this.component.close(args || {});
	}
};
/**/
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
	this.component = null;

	//run custom cleanup logic
	this.onDestroy();
};

//adding to public interface
module.exports = Component;