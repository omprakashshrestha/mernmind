const arrThird = [
    {
        name: 'ram',
        age: 19
    },{
        name: 'shyam',
        age: 23
    },
    {
        name: 'bikash',
        age: 24
    }
]

// const list = arrThird.map((i) => {
//     return i.name;//     return i.name;

// });
// console.log(list);

// const ageList = arrThird.map((i)=>{
//     return i.age;
// });
// console.log(ageList);

const filterArray = arrThird.filter(function (el, i, arr){
    return el.age==='23';
});
console.log(filterArray);