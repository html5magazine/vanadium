var _ = require('/lib/underscore');
var pubSub = require('/lib/pubsub');
function namespace (){
	return {
		module: function(additionalProps) {
	      	return _.extend({ Views: {}, Window: {} }, additionalProps);
	    },
		subscribe: pubSub.subscribe,
		publish: pubSub.publish,
		unsubscribe: pubSub.unsubscribe,
	}
};

module.exports = namespace();
