import test from 'ava';

import {starmap} from '../../src/index.js';
import {repr, mul} from './_fixtures.js';

const macro = (t, callable, iterable, expected) => {
	t.deepEqual(Array.from(starmap(callable, iterable)), expected);
};

macro.title = (title, callable, iterable, expected) =>
	title ?? `starmap(${callable.name}, ${repr(iterable)}) is ${repr(expected)}`;

test(macro, mul, [], []);
test(macro, mul, [[1, 1]], [1]);
test(
	macro,
	mul,
	[
		[1, 1],
		[2, 2],
		[3, 3],
	],
	[1, 4, 9],
);
test(
	macro,
	mul,
	[
		[1, 1],
		[2, 2],
		[3, 3],
		[4, 4],
		[5, 5],
		[6, 6],
	],
	[1, 4, 9, 16, 25, 36],
);
test(
	macro,
	mul,
	[
		[1, 1],
		[2, 2],
		[3, 3],
		[4, 4],
		[5, 5],
		[6, 6],
		[7, 7],
		[8, 8],
		[9, 9],
	],
	[1, 4, 9, 16, 25, 36, 49, 64, 81],
);
