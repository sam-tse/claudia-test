const logger = require('../shared/logger');

exports.handler = function (event, context) {
	context.succeed("get member: " + logger());
};