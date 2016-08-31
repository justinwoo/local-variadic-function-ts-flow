declare module './assign2' {
  declare var exports: {
    // assign2<A: Object>(a: A): A;
    // assign2<A: Object, B: Object>(a: A, b: B): A & B;
    // assign2<A: Object, B: Object, C: Object>(a: A, b: B, c: C): A & B & C;
    // assign2<A: Object, B: Object, C: Object, D: Object>(a: A, b: B, c: C, d: D): A & B & C & D;
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object, G: Object>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A & B & C & D & E & F & G;

    // it seems that only the last definition is being selected when trying to
    // type this local module variadic function
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object, G: Object>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A & B & C & D & E & F & G;
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object, F: Object>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
    // assign2<A: Object, B: Object, C: Object, D: Object, E: Object>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // assign2<A: Object, B: Object, C: Object, D: Object>(a: A, b: B, c: C, d: D): A & B & C & D;
    // assign2<A: Object, B: Object, C: Object>(a: A, b: B, c: C): A & B & C;
    // assign2<A: Object, B: Object>(a: A, b: B): A & B;
    // assign2<A: Object>(a: A): A;
  }
}
