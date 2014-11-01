var assert = require('assert');
var BurtlePRNG = require('../BurtlePRNG');

describe('BurtlePRNG', function() {
  it('gives consistent results for known seeds', function() {
    var rng = new BurtlePRNG(13134040);
    assert(rng.next() === 2829011212);
    assert(rng.next() === 3969589015);
    assert(rng.next() === 3338990431);
    assert(rng.next() === 559423583);
    assert(rng.next() === 3996136310);
  });

  it('complains if you fail to provide a seed', function() {
    assert.throws(function() {
      var _rng = new BurtlePRNG();
    }, TypeError);
  });

  it('always gives the same results for the same seed', function() {
    var seed;
    var i, j;
    var r1, r2, r3, r4;
    var reference;

    for (i = 0; i < 50; i++) {
      // Use the built-in Math.random to get a seed to try.
      seed = ((1<<31) * 2 * Math.random()) >>> 0;

      r1 = new BurtlePRNG(seed);
      r2 = new BurtlePRNG(seed);
      r3 = new BurtlePRNG(seed);
      r4 = new BurtlePRNG(seed);

      for (j = 0; j < 1000; j++) {
        reference = r1.next();
        assert.equal(r2.next(), reference);
        assert.equal(r3.next(), reference);
        assert.equal(r4.next(), reference);
      }
    }
  });
});
