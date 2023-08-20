// 두 수의 나눗셈
// 문제 설명: 정수 num1 과 num2 가 매개변수로 주어질때, num1 을 num2로 나눈 값에 1000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.

// 0 < num1 < 100
// 0 < num2 < 100

function solution (num1, num2){
    var answer = Math.floor(num1 / num2 * 1000);
    console.log("hello");

    // 1. number -> string
    // 2. 10 진수 추론을 위해 string 앞 2글자나 0x나 0x인지 비교 
    return answer; 
}

//num1 을 num2로 나눈다.
// 나눈 값에 1000을 곱한다
// 그 값에 정수부분을 구한다.
// parseInt 도 사용가능 Math.floor 같음 정수부분 찾을때 사용

//2. 숫자비교하기

function solution (num1, num2) {
   if (true){
    return 1; // true 면 여기서 코드가 끝남
   } else {
    return -1;   // false 면 여기서 끝남
}

//1.두 수가 같은지 비교
//2. 비교 결과에 따라 1, -1

