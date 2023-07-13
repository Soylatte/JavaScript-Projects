const superman = {
    name:'clark'
    age:33,
}
// name : key
// clark : value
// each property use ,

//접근
superman.name // 'clark'
superman['age'] //33
//추가
superman.gender = 'male';
superman['hairColor'] = 'black';

//삭제
delete superman.hairColor;
//단축 property
const name = 'clark';
const age = 33;

const superman = {
    name:name,
    age:age,
    gender: 'male',
} 
//  --> 변환가능
const superman = {
    name, // name: name
    age, // age: age
    gender: 'male',
}

// 존재하지 않는 property썼을때
superman.birthDay;
//undefined
'birthDay' in superman;
//false
'age' in superman;
//true


//for...in반복문
for(let key in superman){
    console.log(key)
    console.log(superman[key])
}

const superman = {
    name : 'Clark',
    age : 30,
}

console.log(superman.name)
console.log(superman['age'])
console.log(superman)

superman.hairColor = 'black';
superman.['hobby'] = 'football';
delete superman.age;

function makeObject(name, age){
    return{
        name: name,
        age: age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

// 줄여서 사용 가능
function makeObject(name,age){
    return {
        name,
        age,
        hobby : "football"
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike)
console.log("birthday" in Mike);

// 객체 in
function isAdult(user){
    if('age' in user)|| user.age < 20){ // use에 age 가없거나
        return false;  // 20살 미만이거나
    } else { // else 필요없음
        return true;
    }
}
const Mike = {
    name : 'Mike'
    age : 30
};

const Jane = {
    name : 'Jane'
};

console.log(isAdult(Jane));
//for ... in 예제

const Mike = {
    name : "Mike",
    age : 30
};

for(x in Mike){ //key property 는 mike 가 가지고 있는걸 의미
  console.log(Mike[x]) // Mike[age]
}