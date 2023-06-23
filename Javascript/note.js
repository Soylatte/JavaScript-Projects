Type conversion 형변환
String()  -> 문자형으로 변환
Number()  -> 숫자형으로 변환
Boolean() -> 불린형으로 변환
ex)
"Hello" + "world" = "Hello world"
100 + 200 = 300
"100" + 200 = ?

const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?"); - > 문자형 "90"
문자 + 문자 = 문자 //"90" + "80" = "9080"
// const result = (mathScore + engScore) / 2;
//나누기 먼저 계산됨 괄호가 우선순위
const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2;

console.log(result);

"6"/"2" = 3 자동 형변환
console.log(


String(3),
String(true),
String(false),
String(null),
String(undefined)


)
console.log(
    Number(true), - > 1
    Number(false) -> 0
)

-Boolean
false = 0
        ""
        null 
        undefined
        NaN
*** Number(null)//0
    Number(undefined)//NaN         
    Number(0)//false
    Number('0')//true
    Number('')//false
    Number(' ')//true

    홀수 : X%2 = 1 //어떤 값이 들어와도 5를 넘기면 안됨
    짝수 : Y%2 = 0 // X%5 = 0~4 사이의 값만 반환

    거듭제곱
    2**3

    우선순위
    */ > +- 

    //연산자 줄여서 쓰기
    let num = 10;
    //num = num + 5;
    num += 5;
       -=
       *=
       %=
    console.log(num);

    //증가 , 감소 연산자
    let num = 10;
    num ++;
    --;
    let result = num++;
 
    console.log(result);

    let result = ++num; - > 증가
    num ++가 뒤에 있으면; -> 감소

   // < > <= >= == !=
   a = 3 -> a에 3 넣어줌
   a == 3 -> 같음
   a != 3 //true or false 

   console.log(10>5);
   console.log(10==5);
   console.log(10 != 5);

   const a = 1;
   const b = "1";

   console.log(a == b);
   === : 타입까지 비교해줌
   
   -조건문
   if (age>19){
    console.log('환영합니다');
   }
   //-> age 가 19보다 크면 코드 실행
   // true/ false 로 실행

   else 
   -if 가 false일때

   if(age>19){
    console.log('환영 합니다');
   }

   if(age <= 19){
    console.log('안녕히가세요');
   }
   /
   // if(age>19){
    console.log('환영 합니다');
   } else {                     -> 그렇지 않으면 else
    console.log('안녕히가세요');  -> 실행
   }

   console.log('-----------------------');
   //age === 19

  // if(age > 19){
    console.log('환영합니다');

   } else if(age === 19){  -> true 면 '수능잘치세요' 실행
    console.log('수능 잘치세요');
   } else {   -> false면 ' 안녕히가세요 ' 실행
    console.log('안녕히가세요');
   }

