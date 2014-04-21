var Meeplog = require(__dirname + '/../../'),
    nsq = require('nsq.js');

// create a publisher
var writer = nsq.writer(':4150');

// prepare a stream to be handed to meeplog
var Writable = require('stream').Writable;
var ws = Writable({
    objectMode: true
});

ws._write = function(chunk, enc, next) {
    writer.publish('events', chunk);
    next();
};

// pass nsq producer as a stream
var meeplog = new Meeplog('INFO', ws);

module.exports = meeplog;