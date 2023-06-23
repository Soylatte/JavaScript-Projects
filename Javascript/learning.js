변수: 어떤 정보에 이름을붙여서 저장하고싶을때 사용
name = "mike";
age = 30;
"", '' -> 문자열
alert() : 경고창
console.log : 로그

alert(name);
console.log(age);

let name = "mike";
-> 선언 후 변경 가능, 변할수있는값
const PI = 3.14;
const SPEED_LIMIT = 50;
const BIRTH_DAY = '2020-01-01';
//-> 절대 바뀌지 않는 상수, 수정X, 변하지 않는 값

//1. 변수는 문자와 숫자 $, _만 사용
//2. 첫글자는 숫자 X
//3. 예약어 사용 불가능 
//XXX let let = 99; XXX
//4. 상수는 대문자
//5. 변수명은 읽기 쉽고 이해할수있게 선언
let a = 1;
let usernumber = 1;

-String
const name1 = "mike"
const name2 = "mike"
const name3 = "mike"

//const message = "I'm a boy.";
//const message2 = 'I\m a boy';

//const message3 = 'My name is ${name}';
//const message4 = '나는 ${30+1}살 입니다';

-Number
const age=30;
const PI = 3.14;

console.logg(1+2); // 더하기
console.log (10-3);//빼기
console.log(3*2); //곱하기
console.log(6/3); //나누기
console.log(6%4); //나머지

const x = 1/0;
console.log(x);

const name = "mike";
const y = name/2;

console.log(y);

NaN = not a number 

-Boolean
const a = true;
const b = false;

const name = "mike";
const b = 30;

console.log(name == mike)
console.log(age > 40)

-Null , undefined
let age;
console.log(age); - > undefined 할당되지 않음
let user = null;

-typeof 연산자

const name = "mike";
typeof null;//"object" 객체형
null = 객체아님
** 문자형 + 문자형 = 문자형
숫자형 + 문자형 = 문자형
//const name =" mike";

//const a = "나는 ";
//const b = "입니다 ";

console.log(a + name + b);
const age = 30; //number
console.log(a + age + "살" + b); **

- alert 알려줌
- prompt 입력받음
// const name = prompt("이름을 입력하세요");
// alert("환영합니다" + name + "님");
// console.log(name)
// default 값 입력 가능한 필드 제공
const name = prompt("예약일을 입력해주세요", "2020-01-01")
                                             입력받을 디폴트값
- confirm 확인받음
// const isAdult = confirm("당신은 성인 입니까?");


// console.log(isAdult)

사용자 액션을 한번 더 확인할떄
확인 = true
취소 = false

단점 : 스크립트 일시 정지
스타일링 x

