"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 字符串中嵌入变量
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", \n\thow are you " + time + "?");
// Let 定义函数
if (true) {
  var _b = 2;
  var d = 2;
}
console.log("d ==" + (typeof d === "undefined" ? "undefined" : _typeof(d)) === undefined ? d : "undefined");
console.log("b ==" + (typeof b === "undefined" ? "undefined" : _typeof(b)) === undefined ? b : "undefined");

// 函数默认变量
function test() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  console.log(" test result == " + a);
}

test();

//箭头函数
var sum = function sum(_ref) {
  var first = _ref.first,
      last = _ref.last;
  return first + last;
};
var square = function square(n) {
  return n * n;
};

console.log("arrow function sum " + sum({ first: 5, last: 3 }));
console.log("square == " + square(4));
console.log("square == " + square(4));