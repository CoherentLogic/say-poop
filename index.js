var p = require('say-letter-p');
var o = require('say-letter-o');
var period = require('say-letter-period');
var newline = require('say-letter-newline');

module.exports = sayPoop;

function sayPoop() {
    p();
    o();
    o();
    p();
    period();
    newline();
}
