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
    writer.publish('meeplog', chunk);
    next();
};

module.exports = function(options) {
    options = options || {};

    // pass nsq producer as a stream
    var meeplog = new Meeplog({
        level: 'INFO',
        stream: ws
    });

    return new Meeplog({
        level: 'INFO',
        stream: ws
    });


}