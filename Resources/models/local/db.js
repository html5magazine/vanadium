var db = function(){
	return Ti.Database.open("database");
};

var init = function(name){
	var db = db();
	db.execute("CREATE TABLE IF NOT EXISTS " + name + " (id TEXT PRIMARY KEY, json TEXT)");
	db.close();
};
var setItem = function(name, id, json){
	init();
	var db = db();
	db.execute("INSERT INTO " + name + " (id, json) VALUES (?, ?)", id, json);
	db.close();
};

var getItem = function(name, id){
	init();
	var db = db();
	var record = {};
	if(!id){
		return getAll(name);
	}
	else{
		var rs = db.execute('SELECT * FROM ' + name + " WHERE id = ?", id);
		if(rs.isValidRow()){
			record = rs.fieldByName('json');
		}
		rs.close();
	}
	
	db.close();
};
var removeItem = function(name, id){
	init();
	var db = db();
	db.execute('DELETE FROM ' + name + " WHERE id = ?", id);
	db.close();
};
var getAll = function(name){
	init();
	var db = db();
	var record = {};
	var result = [];
	var rs = db.execute('SELECT * FROM ' + name);
	while(rs.isValidRow()){
		result.push(rs.fieldByName('json'));
	}
	rs.close();
	db.close();
	
	return result.join(',');
};

module.exports.setItem = setItem;
module.exports.getItem = getItem;
module.exports.removeItem = removeItem;
