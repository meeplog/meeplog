var nsq = require('nsq.js');

var reader = nsq.reader({
    nsqd: ['0.0.0.0:4150'],
    maxInFlight: 5,
    topic: 'meeplog',
    channel: 'storage'
});

reader.on('message', function(msg) {
    console.log('storage');
    console.log(msg.body.toString());
    setTimeout(function() {
        msg.finish();
    }, 200);
});