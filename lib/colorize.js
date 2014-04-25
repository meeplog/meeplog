var prettyjson = require('prettyjson'),
    options = {
        keysColor: 'blue', // Color for keys in hashes
        dashColor: 'red', // Color for the dashes in arrays
        stringColor: 'grey', // Color for strings
        numberColor: 'red', // Color for Numbers
        defaultIndentation: 2 // Indentation on nested objects
    }


module.exports = function(obj) {
    return prettyjson.render(obj, options) + '\n\n';
}