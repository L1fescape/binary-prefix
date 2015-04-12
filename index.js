'use strict';
var _ = require('lodash');

module.exports = function(options){
  options = options || {};
  var customPrefixes = options.custom || {};
  var decimal = options.decimal || false;
  var prefixes = {
    B: 'B',
    KB: 'KB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB',
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'YB'
  };

  if (decimal) {
    prefixes['KB'] = 'kB';
  }

  return _.extend({}, prefixes, customPrefixes);
};
