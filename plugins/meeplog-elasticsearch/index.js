var nsq = require('nsq.js'),
    elasticsearch = require('elasticsearch');

var es = new elasticsearch.Client({
    host: '192.168.1.192:9200',
    log: 'trace'
});


es.ping({
    requestTimeout: 1000,
    // undocumented params are appended to the query string
    hello: "elasticsearch!"
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

// var reader = nsq.reader({
//     nsqd: ['0.0.0.0:4150'],
//     maxInFlight: 5,
//     topic: 'events',
//     channel: 'ingestion'
// });

// reader.on('message', function(msg) {

//     console.log(msg.body.toString());
//     setTimeout(function() {
//         msg.finish();
//     }, 200);
// });