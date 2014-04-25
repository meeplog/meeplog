var Meeplog = require(__dirname + '/..')
var meeplog = new Meeplog({
    level: 'INFO',
    colorize: false,
    service: 'node.js app1'
});

meeplog.alert('test that log');
meeplog.info('test that log');
meeplog.warning({
    a: [{
        a: 1
    }, {
        b: 2
    }]
});