import test from 'ava';

import {map} from '../../src/index.js';
import {repr, pow2} from './_fixtures.js';

const macro = (t, callable, iterable, expected) => {
	t.deepEqual(Array.from(map(callable, iterable)), expected);
};

macro.title = (title, callable, iterable, expected) =>
	title ?? `map(${callable.name}, ${repr(iterable)}) is ${repr(expected)}`;

test(macro, pow2, [], []);
test(macro, pow2, [1], [1]);
test(macro, pow2, [1, 2, 3], [1, 4, 9]);
test(macro, pow2, [1, 2, 3, 4, 5, 6], [1, 4, 9, 16, 25, 36]);
test(
	macro,
	pow2,
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 4, 9, 16, 25, 36, 49, 64, 81],
);
