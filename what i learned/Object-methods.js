let a = 'age';
const user = {
    name: 'Mike';
    [a] : 30 //age: 30
}
// 'age' = [a] -> computed property
// Object.assign() : 객체 복제
const user = {
    name: 'Mike',
    age: 30
}

const cloneUser = user; //XXXX
// 객체가 들어간게 아니고 참조값이 들어가서 안됨
const newUser = Object.assign({}, user);
// {} 초기값 user가 {} 초기값에 대입
// 2개이상의 객체 합치기 가능
const user = {
    name: 'Mike'
}
const info1 {
    age: 30,
}
const info2 {
    gender: 'male',
}

Object.assign(user, info1, info2)
// info1, info2 -> user
// Object.keys
const user = {
    name: 'mike',
    age: 30,
    gender: 'male',
}

Object.keys(user);
//Object.values
const user = {
    name: 'mike',
    age: 30,
    gender: 'male',
}

Object.values(user);
// ["mike",30, "male"]
//Object.entries
const user = {
    name: 'mike',
    age: 30,
    gender: 'male',
}

Object.entries(user);
//key 와 값을 묶어서 배열
// Object.fromEntries
//key 와 값을 객체로 변환

let n = "name";
let a = "age";

const user = {
    [n]:"Mkie",
    [a]: 30,
    [1 + 4],

};
console.log(user);

function makeObj(key, val){
    return {
        [key]: val
    }
}

const obj = makeObj("나이", 33);
console.log(obj);
// 어떤게 키가 될지모를때 유용

