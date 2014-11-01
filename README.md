Bob Jenkins' [small noncryptographic
PRNG](http://www.burtleburtle.net/bob/rand/smallprng.html)
(pseudorandom number generator) ported to JavaScript.


## Why not Math.random?

Sometimes you want repeatable results. With this lib, you can save the
seed you used, and later initialize the PRNG with the same seed and
get the same sequence of pseudorandom numbers.

Also, this PRNG beats the one built into V8 on
[ent](http://www.fourmilab.ch/random/)'s chi-square test, indicating
that its output is, in a sense, "more random". (The results on ent's
other tests are excellent for both.)


## Is it fast?

Both BurtlePRNG and the native PRNG are incredibly fast and unlikely
to be a bottleneck in your application.

You can use `test.js`, which prints 10MB of random bytes to the
standard output using Node, to run your own benchmarks. On Node
0.10.28, there is no significant performance difference between
generating 32-bit unsigned integers using test.js versus equivalent
code using Math.random:

```javascript
((1<<31) * 2 * Math.random()) >>> 0
```


## Usage

If you're using Node.js, Browserify or Webpack, use the usual `npm
install burtleprng` and `require`:

    var BurtlePRNG = require('burtleprng');

Otherwise, simply include BurtlePRNG.js in a script tag. It will
export a single class, BurtlePRNG.


## API

### new BurtlePRNG(seed)

Creates and returns a new PRNG instance. The seed argument is
mandatory and should be an unsigned 32-bit integer. Reasonable ways to
come up with a seed include:

```javascript
Date.now() & 0xffffffff

// or

((1<<31) * 2 * Math.random()) >>> 0
```

### prng.next()

Returns a pseudorandom, unsigned 32-bit integer and advances the PRNG
state.

### prng.float()

Returns a pseudorandom floating-point number on the interval [0, 1),
similar to Math.random(), and advances the PRNG state. Equivalent to
`prng.next() / 4294967296.0`.


## License

Bob Jenkins released his original C implementation of this PRNG as
public domain. Similarly, burtleprng is released under the Creative
Commons CC0 Public Domain Dedication. See COPYING.txt for details.
