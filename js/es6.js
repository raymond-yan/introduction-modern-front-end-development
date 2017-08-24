// 字符串中嵌入变量
var name = "Bob", time = "today";
console.log(`Hello ${name}, 
	how are you ${time}?`);
// Let 定义函数
if ( true )
{
  let b = 2;
  var d = 2;
}
console.log( "d ==" + typeof d === undefined ? d : "undefined");
console.log( "b ==" + typeof b === undefined? b : "undefined");

// 函数默认变量
function test(a=1) {
  console.log(" test result == " + a);
}

test();

//箭头函数
const sum = ({ first, last }) => first + last;
const square = n => n * n;

console.log("arrow function sum " + sum({first:5,last:3}));
console.log( "square == "+ square(4));


