switch(평가){
    case A: 
    //A일때 코드
    case B:
        //B일때 코드
}
->if(평가 == A){
    //일때 코드
} else if(평가 == B){
    //B일때 코드
}

//사과 : 100원
//바나나: 200원
//키위 : 300원
//멜론: 500원
//수박: 500원
//사고싶은 과일을 물어보고 가격 알려주기
let fruit = prompt('무슨과일을 사고싶나요?');

switch(fruit){
    case'사과' :
    console.log('100원입니다');
    case'바나나' :
    console.log('200원입니다');
    case'키위' :
    console.log('300원입니다');
    case'멜론' :
    console.log('500원입니다');
    case'수박' :
    console.log('500원입니다');   
}