// 함수 선언문 vs 함수 표현식
function sayHello(){
    console.log('Hello');
}
sayHello();

// -> 함수선언문은 어디서든 호출 가능
// console.log(num);
// let num(1); 실행 X
let sayHello = function(){
    console.log('Hello');
}
sayHello();
//함수 표현식은 코드에 도달하면 생성됨

// 화살표 함수(arrow function)
let add = function(num1, num2){
    return num1 + num2;
}
// --> 
let add = (num1,num2) => {
    return num1 + num2;
} // function 지워짐
//1. 함수 표현식 예
showError();

let showError = function(){
    console.log('error');
}

//2.함수 선언문 예
showError();

function showError(){
    console.log("error");
}

//3.화살표 함수 예

let showError = () => {
    console.log("error");
}

const sayHello =  (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}
// return , 인수 2개 예제
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
// return -> 한줄로 변경
const add = (num1, num2) => (
    num1 + num2
)