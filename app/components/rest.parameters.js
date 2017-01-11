import * as u from '../lib/ke-utils';

u.h1("Rest Parameters");

// p.72
const state = (
  [
    {
      id: 1,
      todo: {
        text: "first to do",
        completed: false,
      }
    },
    {
      id: 2,
      todo: {
        text: "second to do",
        completed: false,
      }
    },
  ]
);

const removeTodo = (state = {}, { type, id }) => {
  switch (type) {
    case 'removeTodo':
      const {[id]: remove, ...rest} = state;
      return rest;
      default:
      return state;
  }
};



/*
function f(a, ...rest) {
  u.p("a=" + a);
  for (let i=0; i<rest.length; i++) {
    u.p(`rest[${i}]=` + rest[i]);
  }
}
f(1,2,3,4,5);

function f1(a, ...rest) {
  u.p("a=" + a);
  rest.map(function(currentVal, index) {
    u.p(`rest[${index}]=` + currentVal);
  })
}
f(1,2,3,4,5);

*/

/*

// Using Babel this ...
const addTodo = (todos, todo) => ({
  ...todos,
  [todo.id]: todo
});

// ... returns this ...

"use strict";

var _extends = Object.assign ||
function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]; }
       }
  } return target;
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value, enumerable: true, configurable: true, writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var addTodo = function addTodo(todos, todo) {
  return _extends({}, todos, _defineProperty({}, todo.id, todo));
};

// Yes, all of the above

*/
