var EventEmitter = require('events').EventEmitter,
    Stream = require('stream'),
    os = require("os"),
    uuid = require('node-uuid'),
    inherits = require('inherits'),
    colorize = require(__dirname + '/colorize');


/**
 * Initialize a `Logger` with the given set of options
 *
 * @param {Object} options [level,stream,service]
 * @api public
 */

function Log(options) {

    options = options || {};
    options.level = options.level || this.DEBUG;

    if (options.level && 'string' === typeof options.level) {
        options.level = exports[options.level.toUpperCase()];
    }

    this.level = isFinite(options.level) ? options.level : this.DEBUG;

    this.stream = options.stream || process.stdout;

    this.service = options.service || '';

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
            obj = colorize(obj);
        } else {
            obj._id = uuid.v4();
            obj.hostname = os.hostname();
            obj.service = this.service;
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

module.exports = Log;