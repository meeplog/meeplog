var Meeplog = require(__dirname + '/../../')

// pass nsq producer as a stream
var meeplog = new Meeplog({
    level: 'INFO',
    stream: fs
});

module.exports = meeplog;