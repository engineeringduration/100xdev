// //JSON>parse
// //JSON>stringify

// const user = {
//     name: 'John',
//     age: 30
// };
// //JSON>stringify
// const userJSON = JSON.stringify(user);
// console.log("A js String.",userJSON);
// console.log("string name call:", user["name"]);
// //JSON>parse
// const userFromJSON = JSON.parse(userJSON);
// console.log("A js object:", userFromJSON);
// console.log("object name call:", userFromJSON.name);

//anonymous function in js
function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function myFunction(a,func){
    return func(a);//return a*a;
}
console.log(myFunction(5,square));