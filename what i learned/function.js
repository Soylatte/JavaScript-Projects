let user = {
    name: 'Mike';
    age: 30,
}
// 객체 리터럴
//생성자 함수는 첫글자 대문자로 만듬
function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);
// new 연산자 이용하여 호출
// 생성자 함수는 필요한 것을 넣고 찍어냄
// 이름,나이가 필요했던것

function User(name,age){
    this = {}
    
    this.name = name;
    this.age = age;
}

new function();
// this에 property 삽입

// 생성자 함수에 method 추가
function User(name, age){
    this.name = name;
    this.age = age;
    this.sayNane = function(){
        console.log(this.name);
    }
}
let user5 = new User('Han', 40);
user5.sayName(); // 'Han'

// this.name = user5Name

function Item(title,price){
    //this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log('가격은 `${price}원 입니다`);
    }
    //return this;
}

const item1 = new Item('인형', 3000);
cosnt item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);

item3.showPrice();
