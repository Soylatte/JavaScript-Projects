alert(1);
// () 안에 값이 표현됨
// 정수 0을기준으로 자연수 1,2,3,4 .......... -1, -2, -3...
// 실수 1.1 ..... -2.-  0 - 2.0 소수점이 붙어있는 수 현실을 반영한 수
// 연산자 +,*,-,/
alert(6/2);
console.log(1);
Math.pow(3,2)//제곱 -> 3의 2승
// math안에 pow라는 명령어
Math.round(10.6)// 반올림 명령어
Math.ceil(10.2)//가장가까운 위의 정수로 올려줌
Math.floor(10.2)//가까운쪽에 있는 아래 정수
Math.sqrt(9)//반
Math.random(); // 랜덤 숫자로 바뀌는 부분
Math.round(100 * Math.random());//100보다 작은 숫자를 반올림해서 나타냄
a = 1 // 1을 a에 넣는다는 개념 
a == 1 // a는 1과 같다
// HOISTING
function myFunction(x) {
    let temp = 2*x + 3
    return temp
}
myFunction(1)

// return 내보내는 값

myFunction = () => {}
let temp = 2*x + 3
return temp;

// 조건문
if(money > 5000){
    rideTaxi();
} else { //거짓일때
    walk();
} else {  // 또 아닐때
    rideBus();
}

// else if 무한정 늘리기 가능
for (let i = 0; i < 10; i++){
    console.log("나무찍기" + i)};
    // 실행될때마다 i가 하나씩 증가함
    // let i = 0 ; 초기값
    // i < 10 조건
    // i++ 증감식




