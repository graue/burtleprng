var BurtlePRNG = require('./BurtlePRNG');

var ranctx = new BurtlePRNG(0x2afdf037);
var dwordsPerBlock = 10;
var blocks = 262144;
var buf = new Buffer(dwordsPerBlock*4);

for (var i = 0; i < blocks; i++) {
  for (j = 0; j < dwordsPerBlock; j++) {
    buf.writeUInt32LE(ranctx.next(), j*4);
  }
  process.stdout.write(buf);
}
