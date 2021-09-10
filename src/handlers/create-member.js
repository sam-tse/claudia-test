const logger = require('../shared/logger');

exports.handler = function (event, context) {
	context.succeed("create member: " + logger());
};