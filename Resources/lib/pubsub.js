var _ = require('/lib/underscore');
function pubSub(){
	var cache = {};
	var pubsub = {
		subscribe: function(message, callback){
			var token = [message, callback];
			if(!cache[message]){
				cache[message] = [];
			}
			cache[message].push(callback);
			return token;
		},
		publish: function(message, data, scope){
			if(cache[message]){
				var subscriber = cache[message],
				i = subscriber.length - 1;
				if(_.isArray(data) === false){
					data = [data];
				}
				for(i; i >= 0; i -= 1){
					subscriber[i].apply( scope || this, data || []);
				}
			}
		},
		unsubscribe: function(token, complete){
			var message = token[0],
			i = cache[message].length - 1;
			
			if(cache[message]){
				for(i; i >= 0; i -= 1){
					if(cache[message][i] === token[1]) {
						cache[message].splice(cache[message][i], 1);
						if(complete){
							delete cache[message];
						}
					}
				}
			}
		}
	};
	
	return pubsub;
};


module.exports = pubSub();
