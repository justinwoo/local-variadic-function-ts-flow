/* @flow */

import {assign2} from './assign2';

type A = {a: boolean, b: boolean};
type B = A & {c: boolean};
type C = B & {d: boolean};

var a: A = assign2({}, {a: true}, {b: true});
var b: B = assign2({}, {a: true}, {b: true}, {c: true});
var c: C = assign2({}, {a: true}, {b: true}, {c: true}, {d: true});
