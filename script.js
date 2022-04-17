const arrThird = [
    {
        name: 'ram',
        age: 19
    },{
        name: 'shyam',
        age: 23
    }
]

const list = arrThird.map((i) => {
    return i.name;
});
console.log(list);

const ageList = arrThird.map((i)=>{
    return i.age;
});
console.log(ageList);