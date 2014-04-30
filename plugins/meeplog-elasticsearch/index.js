var nsq = require('nsq.js'),
    formatObject = require(__dirname + '/formatObject'),
    elasticsearch = require('elasticsearch');

var es = new elasticsearch.Client({
    host: '192.168.1.192:9200',
    levels: ['error', 'warning']
});


var reader = nsq.reader({
    nsqd: ['0.0.0.0:4150'],
    maxInFlight: 5,
    topic: 'meeplog',
    channel: 'storage'
});

reader.on('message', function(msg) {
    var Mymsg = formatObject(msg.body);
    es.create(Mymsg, function(error, response) {
        msg.finish();
    });

});