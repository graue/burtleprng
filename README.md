Bob Jenkins' [small noncryptographic
PRNG](http://www.burtleburtle.net/bob/rand/smallprng.html) adapted to
JavaScript.

`test.js` prints 10MB of random bytes to the standard output using
Node, useful for benchmarking and testing randomness.

With Node 0.10.28, test.js is on-par in performance with equivalent
code using

```javascript
((1<<31) * 2 * Math.random()) >>> 0
```

to generate random numbers, and does much better on the chi-square
test in [ent](http://www.fourmilab.ch/random/) (the results on ent's
other tests do not significantly differ).

This also gives you repeatable "randomness" as you can save the seed
you used and reuse that seed later, unlike `Math.random`.
