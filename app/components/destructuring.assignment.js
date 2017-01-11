import * as u from '../lib/ke-utils';
let a, b, c, rest, o;

u.h1("Nested object and array destructuring");
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};
var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;
u.p(englishTitle); // "Scratchpad"
u.p(localeTitle);  // "JavaScript-Umgebung"

u.h1("Object destructuring");
u.h2("Assigning to new variable names");
u.p("A variable can be extracted from an object and assigned to a variable with a different name than the object property.");
u.code("o = {p: 42, q: true};<br>var {p: foo, q: bar} = o;");
o = {p: 42, q: true};
var {p: foo, q: bar} = o;
u.p("foo=" + foo);
u.p("bar=" + bar);

u.h2("Basic assignment");
o = {p: 42, q: true};
let {p, q} = o;
u.p(p); // 42
u.p(q); // true

u.h1("Syntax");

u.h2("Parse array returned from function");
u.code("function f() { [1,2]}<br>[a, b] = f();");
function f() { return [1,2] }
[a, b] = f();
u.p("a=" + a);
u.p("b=" + b);


u.h2("array to array");
u.code("[a, b] = [1, 2];");
[a, b] = [1, 2];
u.p("a=" + a);
u.p("b=" + b);

u.h2("array with spread");
u.code("[a, b, ...rest] = [1, 2, 3, 4, 5];");
[a, b, ...rest] = [1, 2, 3, 4, 5];
u.p("a=" + a);
u.p("b=" + b);
u.p("rest=" + rest);

u.h2("named object to unamed object");
u.code("({a, b} = {a:1, b:2});");
({a, b} = {a:1, b:2});
u.p("a=" + a);
u.p("b=" + b);

u.h2("named object to unamed object with spread");
// ES2016 - not implemented in Firefox 47a01
u.code("({a, b, ...rest} = {a:1, b:2, c:3, d:4});");
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
u.p("a=" + a);
u.p("b=" + b);
u.p("rest.c=" + rest.c + ", rest.d=" + rest.d);

u.h2("Array destructuring");
foo = ["one", "two", "three"];
[a, b, c] = foo;
u.p("a=" + a);
u.p("a=" + b);
u.p("c=" + c);

u.h2("Default values");
u.code("[a=5, b=7] = [1];");
[a=5, b=7] = [1];
u.p("a=" + a);
u.p("b=" + b);
