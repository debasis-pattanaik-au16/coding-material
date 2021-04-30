"use strict";

function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args);
  var sum = 0; // args.forEach(item => sum += item)

  for (var index = 0; index < args.length; index++) {
    sum += args[index];
  }

  console.log(sum);
}

add(10, 88, 77, 99);
var KEY = 'white_rabbit';

if (true) {
  var _KEY = 'ginger_rabbit';
}

console.log(KEY);
