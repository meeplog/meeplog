var EventEmitter = require('events').EventEmitter,
    Stream = require('stream'),
    prettyjson = require('prettyjson'),
    inherits = require('inherits');

// color for terminal output, todo: 1 theme / log level 
var options = {
    keysColor: 'blue', // Color for keys in hashes
    dashColor: 'red', // Color for the dashes in arrays
    stringColor: 'grey', // Color for strings
    numberColor: 'red',
    defaultIndentation: 2 // Indentation on nested objects
}

/**
 * Initialize a `Logger` with the given log `level` defaulting
 * to __DEBUG__ and `stream` defaulting to _stdout_.
 *
 * @param {Number} level
 * @param {Object} stream
 * @api public
 */

var Log = module.exports = function Log(level, stream) {

    if ('string' === typeof level) {
        level = exports[level.toUpperCase()];
    }

    this.level = isFinite(level) ? level : this.DEBUG;

    this.stream = stream || process.stdout;

    this.tty = (this.stream === process.stdout) ? true : false;

};


/**
 * Inherit from `EventEmitter`.
 */
inherits(Log, EventEmitter);


/**
 * System is unusable.
 *
 * @type Number
 */

exports.EMERGENCY = 0;

/**
 * Action must be taken immediately.
 *
 * @type Number
 */

exports.ALERT = 1;

/**
 * Critical condition.
 *
 * @type Number
 */

exports.CRITICAL = 2;

/**
 * Error condition.
 *
 * @type Number
 */

exports.ERROR = 3;

/**
 * Warning condition.
 *
 * @type Number
 */

exports.WARNING = 4;

/**
 * Normal but significant condition.
 *
 * @type Number
 */

exports.NOTICE = 5;

/**
 * Purely informational message.
 *
 * @type Number
 */

exports.INFO = 6;

/**
 * Application debug messages.
 *
 * @type Number
 */

exports.DEBUG = 7;

/**
 * prototype.
 */

/**
 * Log output message.
 *
 * @param  {String} levelStr
 * @param  {Array} args
 * @api private
 */

Log.prototype.log = function(levelStr, msg) {


    if (exports[levelStr] <= this.level) {

        var msg = msg || '';

        // if ('Object' === typeof msg) {
        //     msg = JSON.stringify(msg);
        // }

        var obj = {
            level: levelStr,
            time: Date.now(),
            message: msg
        };

        if (this.tty) {
            obj = prettyjson.render(obj, options) + '\n\n';
        } else {
            obj = JSON.stringify(obj);
        }

        this.stream.write(obj);
    }
};


/**
 * Log emergency `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.emergency = function(msg) {
    this.log('EMERGENCY', msg);
};

/**
 * Log alert `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.alert = function(msg) {
    this.log('ALERT', msg);
};

/**
 * Log critical `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.critical = function(msg) {
    this.log('CRITICAL', msg);
};

/**
 * Log error `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.error = function(msg) {
    this.log('ERROR', msg);
};

/**
 * Log warning `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.warning = function(msg) {
    this.log('WARNING', msg);
};

/**
 * Log notice `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.notice = function(msg) {
    this.log('NOTICE', msg);
};

/**
 * Log info `msg`.
 *
 * @param  {String} msg
 * @api public
 */

Log.prototype.info = function(msg) {
    this.log('INFO', msg);
};

/**
 * Log debug `msg`.
 *
 * @param  {String} msg
 * @api public
 */
Log.prototype.debug = function(msg) {
    this.log('DEBUG', msg);
};