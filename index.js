'use strict';
var _ = require('lodash');
var prefixes = {
  binary: {
    B: 'B',
    KB: 'KB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB',
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'YB'
  },
  decimal: {
    B: 'B',
    KB: 'kB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB',
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'YB'
  }
};

module = module.exports = function(options){
  options = options || {};
  var customPrefixes = options.custom || {};
  var decimal = options.decimal || false;

  return _.extend({}, (decimal ? prefixes.decimal : prefixes.binary), customPrefixes);
};

module.binary = prefixes.binary;
module.decimal = prefixes.decimal;
