import {pow2 as _pow2, mul as _mul} from '@functional-abstraction/operator';

export const repr = (x) => JSON.stringify(x);
export const pow2 = (x) => _pow2(x);
export const mul = (a, b) => _mul(a, b);
