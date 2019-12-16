To be use like this :

LOG_LEVEL=debug npm run yourprocess

choices are : error, warn, info, verbose, debug, silly

const {
    Looger
} = require('maxthod-logger')

// OR calling init on the package

// will make global Logger variable

require('maxthod-logger').init()

// THEN

Logger.info()

// Based on winston logger