const {
	createLogger,
	format,
	transports
} = require('winston');


const {
	combine,
	timestamp,
	label,
	printf
} = format;

const myFormat = printf(({
	level,
	message,
	label,
	timestamp
}) => {
	return `[${timestamp} [${label}] ${level}]: ${message}`;
});

const loglevel = process.env.LOG_LEVEL || "info"

const logger = function (filename) {
	const _filename = filename.split('/')[filename.split('/').length - 1]
	return createLogger({
		level: loglevel,
		format: combine(
			format.splat(),
			format.simple(),
			format(logFormatter),
			label({
				label: _filename,
				level: process.env.LOG_LEVEL || "info",
				prettyPrint: true,
				colorize: true                                                                                                                                                                                                  
			}),
			timestamp(),
			myFormat
		),
		transports: [new transports.Console()]
	});
}

const log = logger(__filename)

log.info("Log level %s", loglevel);

module.exports = {
	Logger : logger,
	init : function() {
		global.Logger = logger;
	}
}
