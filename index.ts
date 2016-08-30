function assign2<A extends Object>(a: A): A;
function assign2<A extends Object, B extends Object>(a: A, b: B): A & B;
function assign2<A extends Object, B extends Object, C extends Object>(a: A, b: B, c: C): A & B & C;
function assign2<A extends Object, B extends Object, C extends Object, D extends Object>(a: A, b: B, c: C, d: D): A & B & C & D;
function assign2<A extends Object, B extends Object, C extends Object, D extends Object, E extends Object>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
function assign2<A extends Object, B extends Object, C extends Object, D extends Object, E extends Object, F extends Object>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
function assign2<A extends Object, B extends Object, C extends Object, D extends Object, E extends Object, F extends Object, G extends Object>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A & B & C & D & E & F & G;
function assign2(...objects: Array<any>): any;
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