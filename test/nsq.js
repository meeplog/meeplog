var meeplog = require(__dirname + '/../plugins/meeplog-nsq')


setInterval(function() {
    meeplog.alert('alert message ');
}, 2000)