// Variable
let 
const // from ES6
var // 이전 JAVA
// 한번 선언된 변수를 다시 선언가능 VAR
var name = "mike";
console.log(name);//mike
var name = "Jane";
console.log(name);// Jane

.. > let name = "Mike";
console.log(name)//error
let name = "Jane";
console.log(name); //error

var는 선언하기 전에 사용 가능
var name; // 최상위로 끌어진것처럼 작동 hoisting
console.log(name); //undefined 
var name = 'mike'; //name 변수만 올려진 것이고 mike 는 아님

console.log(name)//referenceError
letl name = 'mike';

//hoisting: 스코프 내부 어디서든 변수 선언은 최상위에 선언된것처럼 행동
// TDZ: console.log(name) -> Temporal dead zone
const name = "mike" // 함수 선언 및 할당
console.timeLog(name)//사용가능
할당 전에 사용 불가능
// HOISTING: 스코프 단위

let age = 30;
function showAge(){    // TDZ zone
    console.log(age); 
 
    let age = 20;
}

// 변수의 생성과정
1. 선언단계 var  
2. 초기화 단계 let은 선언,초기화 따로 이루어짐
3. 할당 단계
const 는 선언 + 초기화 + 할당
var 은 선언 및 초기화
// 스코프
var: 함수 스코프 function-scoped 함수 내에서 
let, const : block-scoped - function, if,for,while,try/catch
- block 내에서만 유효, 외부접근 불가능 

const age = 30;

if(age>19){
    var txt = '성인';
}

console.log(txt);//'성인'
let,const는 {} 내에서만 사용가능
