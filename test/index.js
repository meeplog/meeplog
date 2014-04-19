var Meeplog = require(__dirname + '/..')
var meeplog = new Meeplog('INFO');

meeplog.alert('test that thing');
meeplog.error({
    'a-b': 'test-that-thing'
});
meeplog.error({
    'a-b': 212
});

meeplog.error({
    'a-c': [1, 2, 3]
});