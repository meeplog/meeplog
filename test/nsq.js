var meeplog = require(__dirname + '/../plugins/meeplog-nsq')({});


setInterval(function() {
    meeplog.alert({
        test: 'alert message'
    });
}, 2000)

setInterval(function() {
    meeplog.info({
        usage: 'high'
    });
}, 2000)