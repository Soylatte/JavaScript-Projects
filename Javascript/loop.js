1부터 10까지 로그
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

loop: 동일한 작업을 여러번 반복

- for 
for(let i = 0; i < 10; i++){
    //반복할 코드
}
//(let i = 0) -> 초기값
//i<10 -> 조건 false가 되면 멈춤
i++ -> 코드실행 후 작업
i = 0
i 가 10보다 작으므로 코드실행 i값 1증가
i = 1
i가 10보다 작으므로 코드실행 i 값 1증가
--- 반복 ----

for(let i = 0; i < 10; i++){
    console.log(1+1)
}
for(let i = 1; i < 11; i++){
    console.log()
}

-while

let i = 0;
while(i<10){
    //코드
}

let i = 0;
while(i<10){
    console.log(i);
    i++;
}

- do..while
let i = 0;
do {
    //코드
    i++;

} while(i<10)

i 가 10보다 작으면 do 내부 코드 실행
적어도 한번은 실행
- break : 멈추고 빠져나옴

-continue: 멈추고 다음 반복으로 진행

while(true){
    let answer = confirm('계속할까요?');
    if(!answer){
        break;
    }
}
// while 은 무한반복됨으로 주의!
// break를 만날때까지 반복 
- continue

for(let i = 0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(1)
}

// 0을2로나누면 컨티뉴를 만나지 못함


