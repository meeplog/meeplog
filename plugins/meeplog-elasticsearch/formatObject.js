module.exports = function formatObject(data) {
    data = JSON.parse(data.toString());
    var message = {
        index: 'meeplog-2014-04-30',
        type: 'logs',
        id: data._id,
        body: {
            message: data.message,
            service: data.service,
            hostname: data.hostname,
            level: data.level,
            timestamp: data.timestamp
        }
    };
    console.log(message);
    return message;

}