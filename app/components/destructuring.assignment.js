import * as u from '../lib/ke-utils';
let a, b, c, rest;

u.h1("Syntax");

u.h2("array to array");

[a, b] = [1, 2];
u.p(a); // 1
u.p(b); // 2

u.h2("array with spread");
[a, b, ...rest] = [1, 2, 3, 4, 5];
u.p(a); // 1
u.p(b); // 2
u.p(rest); // [3, 4, 5]

u.h2("named object to unamed object");
({a, b} = {a:1, b:2});
u.p(a); // 1
u.p(b); // 2

u.h2("named object to unamed object with spread");
// ES2016 - not implemented in Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
u.p(a); // 1
u.p(b); // 2
u.p(rest.c + "," + rest.d);

u.h2("Array destructuring");
let foo = ["one", "two", "three"];
[a, b, c] = foo;
u.p(a);
u.p(b);
u.p(c);

u.h2("Default values");
u.code("[a=5, b=7] = [1];");
[a=5, b=7] = [1];
u.p(a); // 1
u.p(b); // 7
