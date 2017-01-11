import * as u from '../lib/ke-utils';

"use-strict";

u.h1("Hi Danny");

// a
let a;
a=6;
u.p(a);

// b
let b;
b="asdfg";
u.p(b);

let c;
c = [1,2,"abc"];
u.h3("print c");
u.p(c);
u.h3("c.length");
u.p(c.length);
u.h3("for loop");
for (let i=0; i<c.length; i++) {
  u.p("i=" + i);
  u.p(c[i]);
}
