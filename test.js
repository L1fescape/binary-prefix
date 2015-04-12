'use strict';
var expect = require('chai').expect;
var prefixes = require('./');

it('should return the correct binary prefixes', function () {
  var binaryPrefixes = prefixes();
  expect(binaryPrefixes).to.eql({
    B: 'B',
    KB: 'KB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB', 
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'YB'
  });
});

it('should return the correct decimal prefixes', function () {
  var decimalPrefixes = prefixes({
    decimal: true
  });
  expect(decimalPrefixes).to.eql({
    B: 'B',
    KB: 'kB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB', 
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'YB'
  });
});

it('should support custom prefixes', function () {
  var binaryPrefixes = prefixes({
    custom: {
      KB: 'Kilobytes',
      YB: 'A ton of bytes'
    }
  });
  expect(binaryPrefixes).to.eql({
    B: 'B',
    KB: 'Kilobytes',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB', 
    PB: 'PB',
    EB: 'EB',
    ZB: 'ZB',
    YB: 'A ton of bytes'
  });
});

it('should not premanently modify the prefixes object', function () {
  var decimalPrefixes = prefixes({
    decimal: true
  });
  expect(decimalPrefixes.KB).to.equal('kB');

  var binaryPrefixes = prefixes();
  expect(binaryPrefixes.KB).to.equal('KB');
});
