import * as u from '../lib/ke-utils';

u.h1("Spread Operator");
function myFunction(v, w, x, y, z) {
  u.p("v=" + v);
  u.p("w=" + w);
  u.p("x=" + x);
  u.p("y=" + y);
  u.p("z=" + z);
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

u.h1("A more powerful array literal");
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
u.p("lyrics=" + lyrics);

u.h2("Spread operator only goes one level deep")
var a =[[1], [2], [3]];
u.p("a=" + a);
var b = [...a];
u.p("b=" + b);
b.shift().shift();// a is now [[], [2], [3]]
u.p("b=" + b);

u.h2("Using instead of push");
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
u.p(arr1);
