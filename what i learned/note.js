function 함수
팝업, 결제 - > 자주, 여러곳에 쓴다면
함수는 가능하게 해줌

//console, alert, confirm

function sayHello(name){ // function : 함수 sayHello: 함수명
    console.log(`Hello,${name}`);
}(
// {} 내부는 함수의 실행코드

// error message 
function showError()//()안에는 매개변수
{
    alrert('에러');
}

showError();

// 매개변수가 있는 함수

function sayHello(name){
    const msg = `Hello, ${name}`;
    if(name){
        msg = `Hello,${name}`;
    }
    console.log(msg);
}
//function안에서만 사용가능
//function 외부에서도 사용하고 싶다면 let msg = 'Hello';
//console.log(msg);
sayHello('Mike');

//전역변수와 지역변수
let msg = "welcome";

function sayHello(name){
    let msg = "Hello"
    console.log(msg + '' + name);
}

sayHello('mike');
console.log(msg);

let name = "mike";

function sayHello(name){
    console.log(name)
}
sayHello();
sayHello('jane');

//OR
function sayHello(name) {
    let newName = name || 'friend'; // false 
    let msg += `Hello, ${newName}`
    console.log(msg)
}

sayHello();
sayHello('jane');
//default value
function sayHello(name = 'friend') {
    // false 
    let msg += `Hello, ${newName}`
    console.log(msg)
}
//return 

function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3); // return 된값은 result안에
console.log(result)

function showError(){
    alert('error');
    return;
    alert('이 코드는 실행되지 않습니다');
}
// return은 함수 정리목적으로도 사용가능
const result = showError();
console.log(result);

//한번에 한작업에 집중
// 읽기쉽고 어떤 동작인지 알수있게 네이밍
// showError 에러를 보여줌
// getName 이름을 얻어옴
// createUserData 유저 데이터 생성
//checkLogin 로그인 여부 체크
