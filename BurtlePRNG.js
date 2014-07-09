function BurtlePRNG(seed) {
  seed >>>= 0;
  var ctx = this.ctx = new Array(4);
  ctx[0] = 0xf1ea5eed;
  ctx[1] = ctx[2] = ctx[3] = seed;
  for (var i = 0; i < 20; i++) {
    this.next();
  }
  return this;
}

function rot(x, k) {
  return (x << k) | (x >> (32-k));
}

BurtlePRNG.prototype.next = function() {
  var ctx = this.ctx;
  var e =           (ctx[0] - rot(ctx[1], 27))>>>0;
  ctx[0] = (ctx[1] ^ rot(ctx[2], 17))>>>0;
  ctx[1] = (ctx[2] + ctx[3])>>>0;
  ctx[2] = (ctx[3] + e)>>>0;
  ctx[3] = (e      + ctx[0])>>>0;
  return ctx[3];
}

if (typeof module === 'object') {
  module.exports = BurtlePRNG;
}
