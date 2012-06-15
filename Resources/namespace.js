var _ = require('/lib/underscore');
var pubSub = require('/lib/pubsub');
function namespace (){
	return {
		module: _.extend({}, {windows: {}, views: {}, models: {}, controllers: {}}),
		subscribe: pubSub.subscribe,
		publish: pubSub.publish,
		unsubscribe: pubSub.unsubscribe,
	}
};

module.exports = namespace();
