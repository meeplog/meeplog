var meeplog = require(__dirname + '/../plugins/meeplog-filesystem')({})

setInterval(function() {
    meeplog.alert('test log file');
}, 100)