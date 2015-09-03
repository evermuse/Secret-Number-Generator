'use strict';

module.exports = (function() {

  var secretNumber = Math.floor(Math.random() * 100000);

  return function() {

    return secretNumber;

  };

});