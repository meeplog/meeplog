var Meeplog = require(__dirname + '/../../'),
    fs = require('fs');

module.exports = function(options) {
    options = options || {};
    options.path = options.path || '/tmp/meeplog.json';
    var ws = fs.createWriteStream(options.path);

    return new Meeplog({
        level: 'INFO',
        stream: ws
    });


}