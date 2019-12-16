var assert = require('assert');
let log = require('../index').Logger(__filename)
let a = require('./afile')
let b = require('./bfile')

describe('Log', function () {
    describe('log.info(', function () {
        it('should return log with filname', function () {
            log.info("Allo")
            a()
            b()
        });
    });
});