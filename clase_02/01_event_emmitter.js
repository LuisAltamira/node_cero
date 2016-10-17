'use strict';
 const EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

ee
    .on('myevent', message => console.log(message))
    .once('myevent', message => console.log(`Se emite por primera vez: ${message}`));

ee.emite('myevent', 'soy un emisor de eventos');
ee.emite('myevent', 'volviendo emitir');
ee.removeAllListener('myevent');
ee.emit('myevent', 'Volviendo a emitir por tercera vez');
