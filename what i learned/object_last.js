const superman = {
    name: 'clark'
    age: 33,
    fly: function(){
        console.log("날아갑니다.")
    }
}
superman.fly(); // 날아갑니다 
// superman.fly 호출
// Method: 객체 property로 할당 된 함수
superman.fly(); //날아갑니다
const superman = {
    name: 'Clark'
    age: 33,
    fly(){
        console.log("날아갑니다.")
    }
}
// ==> function 생략가능해서 사용가능
const user = {
    name: "Mike",
    sayHello: function(){
        console.log(`Hello,I'm Clark`);
    }
}
// sayHello = Method
// .this -> ${this.name}
// .this는 .앞에 있는 내용 의미
// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져옴

let boy = {
    name: "Mkie",
    sayHello:() => {
        console.log(this); //전역객체 브라우저 에서는 : window Node.js에서는 global
    }
}
boy.sayHello();
// this != boy

// Method
let boy = {    //boy 객체
    name: "Mike",
    showName: function (){
      console.log(boy.name) // (this.name) 으로 변경하면 됨 객체명 직접쓰지않고 this 로 대체
    }
};
boy.showName();

let mane = boy;
// 객체를 따로 만든건 아니나 두개로 사용 가능
mane.name = "Tom"

console.log(boy.name)
man.showName();
boy = null;

man.showName(); //? boy 는 null 을 가지고 있어서 에러
// 화살표함수 사용하지 않는게 좋음
