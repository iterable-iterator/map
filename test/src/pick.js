import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {map, pick} from '../../src/index.js';
import {repr} from './_fixtures.js';

const macro = (t, object, iterable, expected) => {
	t.deepEqual(Array.from(pick(object, iterable)), expected);
};

macro.title = (title, object, iterable, expected) =>
	title ?? `pick(${repr(object)}, ${repr(iterable)}) is ${repr(expected)}`;

const simple = (t, object, iterable) => {
	const expected = simple.args(object, iterable);
	macro(t, object, iterable, expected);
};

simple.args = (object, iterable) => {
	const callable = (key) => object[key];
	return Array.from(map(callable, iterable));
};

simple.title = (title, object, iterable) => {
	const expected = simple.args(object, iterable);
	return macro.title(title, object, iterable, expected);
};

test(simple, '', []);
test(simple, 'abc', []);
test(simple, 'abc', [0, 2]);
test(simple, {}, []);
test(simple, {}, ['key']);
test(simple, {key: Math.random()}, ['key']);
test(
	simple,
	{
		k: Math.random(),
		e: Math.random(),
		y: Math.random(),
	},
	'key',
);

test(simple, list(range(10)), range(0, 10, 2));
