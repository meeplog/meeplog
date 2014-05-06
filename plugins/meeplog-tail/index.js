var Meeplog = require(__dirname + '/../../'),
    Tail = require('always-tail'),
    fs = require('fs');

var Readable = require('stream').Readable;
var rs = Readable();
rs._read = function(data) {
    rs.push(data);
}


module.exports = function(options) {
    options = options || {};

    // if (!fs.existsSync(options.filename)) {
    //     fs.writeFileSync(options.filename, "");
    // }

    var tail = new Tail(options.filename, '\n');

    tail.on('line', function(data) {
        console.log(data)
        rs.write(data);
    });

    tail.on('error', function(data) {
        console.log("error:", data);
    });

    tail.watch();

    // rs.pipe(process.stdout);

}