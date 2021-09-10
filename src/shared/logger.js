"use strict";

const { v4: uuidv4 } = require('uuid');

function logger() {
  return "logging 1234567890: " + uuidv4();
}

module.exports = logger
