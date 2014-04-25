var Meeplog = require(__dirname + '/../../'),
    fs = require('fs');

var ws = fs.createWriteStream('/tmp/meeplog.json');

// pass nsq producer as a stream
var meeplog = new Meeplog({
    level: 'INFO',
    stream: ws
});

module.exports = meeplog;