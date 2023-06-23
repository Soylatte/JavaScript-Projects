|| (OR) : 여러개중 하나라도 true 면 true
모든값이 false 일때만 false를 반환
//첫번째 true 를 발견하는 즉시 평가를 멈춤

&& (AND) : 모든값이 true면 true
하나라도 false 면 false를 반환
//첫번째 false를 발견하는 즉시 평가를 멈춤

!(NOT) : true면 false
false 면 true
//OR
//이름이 TOM 이거나, 성인이면 통과
const name = "mike";
const age = 30;

if(name === 'tom' || age > 19){
    console.log('통과');
}
//AND
if(name === mike && age > 19){
    console.log('통과');
} else {
    console.log('돌아가')
}
//NOT
const age = prompt('나이');
const isAdult = age > 19;
if(!isAdult){
    console.log('돌아가');
}
// 우선순위
//남자이고 이름이 mike 면 통과
const gender = 'f';
const name = 'Jane';
const isAdult = true;
//if(gender === 'm' && name === 'mike' || isAdult)
if(gender === 'm' && name === 'mike'|| isAdult){
    console.log('통과')
}  else {
    console.log('돌아가');
}

