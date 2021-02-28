'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export digicoincore-lib', function() {
    var digicoincore = require('../');
    should.exist(digicoincore.lib);
    should.exist(digicoincore.lib.Transaction);
    should.exist(digicoincore.lib.Block);
  });
});
