// 문제설명
// 1.정수 num1 과 num2가 주어질때, num1 과 num2의 합을 return 하도록 solution 함수를 완성해주세요.

//제한사항
//- 50,000 < num1 < 50,000
//- 50,000 < num2 < 50,000

function solution(num1,num2){ // solution 함수는 여러번 동작한다
    // num1 => 어떤 값으로 대체가 가능
    return num1 +  num2;
}

//2. 두 수의 차 
// 문제설명 
// 정수 num1 과 num2 가 주어질때, num1에서 num2를 뺀 값을 return 하도록 solution 함수를 완성해주세요.

//제한사항
// -5000 < num1 < 50000
// -5000 < num2 < 50000

function solution(num1 , num2) {
    return num1 - num2;
}
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

//3. 두 수의 곱
// 정수num1, num2가 매개변수 주어집니다. num1 과 num2 를 곱한 값을 return 하도록 solution 함수를 완성해주세요

function solution (num1, num2) {
    return num1*num2;
}
function solution(num1, num2){
    var answer = num1 * num2;
    return answer;
}

// 4.몫 구하기
// 정수 num1, num2가 매개변수로 주어질때 num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    return Math.floor(num1/ num2) // 결과가 딱 나눠 떨어지지 않으면 틀리다고 뜸

    // Math.floor(19/7) 소숫점 뒷자리 버림 함수
}