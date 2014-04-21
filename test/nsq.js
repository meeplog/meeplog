var meeplog = require(__dirname + '/../plugins/meeplog-nsq')


setInterval(function() {
    meeplog.alert('alert message ');
}, 1000)

setInterval(function() {
    meeplog.info('info message');
}, 1000)