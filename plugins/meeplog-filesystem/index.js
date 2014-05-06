var Meeplog = require(__dirname + '/../../'),
    fs = require('fs');

module.exports = function(options) {
    options = options || {};
    options.path = options.path || '/tmp/logs/meeplog.log';
    var ws = fs.createWriteStream(options.path, {
        flags: 'a'
    });

    return new Meeplog({
        level: 'INFO',
        stream: ws
    });


}