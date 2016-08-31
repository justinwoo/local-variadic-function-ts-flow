/* @flow */

// import {assign2} from './assign2';

// declare function assign2<A: Object>(a: A): A;
// declare function assign2<A: Object, B: Object>(a: A, b: B): A & B;
// declare function assign2<A: Object, B: Object, C: Object>(a: A, b: B, c: C): A & B & C;
// declare function assign2<A: Object, B: Object, C: Object, D: Object>(a: A, b: B, c: C, d: D): A & B & C & D;
// declare function assign2<A: Object, B: Object, C: Object, D: Object, E: Object>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
// declare function assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;

declare function assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
declare function assign2<A: Object, B: Object, C: Object, D: Object, E: Object>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
declare function assign2<A: Object, B: Object, C: Object, D: Object>(a: A, b: B, c: C, d: D): A & B & C & D;
declare function assign2<A: Object, B: Object, C: Object>(a: A, b: B, c: C): A & B & C;
declare function assign2<A: Object, B: Object>(a: A, b: B): A & B;
declare function assign2<A: Object>(a: A): A;
function assign2(...objects) {
  var init = objects[0];
  for (var i = 1; i < objects.length; i++) {
    var obj = objects[i];
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        init[k] = obj[k];
      }
    }
  }
  return init;
}

type A = {a: boolean, b: boolean};
type B = A & {c: boolean};
type C = B & {d: boolean};

var a: A = assign2({}, {a: true}, {b: true});
var b: B = assign2({}, {a: true}, {b: true}, {c: true});
var c: C = assign2({}, {a: true}, {b: true}, {c: true}, {d: true});
