import * as u from '../lib/ke-utils';

// DOESN'T WORK BECAUSE ??
const toggle = (obj) => ({
  ...obj,
  completed: !obj.completed,
})

const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
});

function runIt() {
  u.logFunction('runIt');
  let obj = {
    id: 1,
    tasks: [],
    completed: false,
  }

  console.log(obj);
  toggle(obj);
  console.log(obj);
}

runIt();
