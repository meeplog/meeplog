var Tail = require('always-tail'),
    fs = require('fs');


var tail = new Tail('/tmp/meeplog.log');

tail.on('line', function(data) {
    console.log(data)
});

tail.on('error', function(data) {
    console.log("error:", data);
});

tail.watch();