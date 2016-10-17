'use strict';
const EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits;

function Clock() {
    setInterval( () => this.emit('tictac', 1000));
}
