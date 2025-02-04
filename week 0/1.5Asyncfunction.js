// const fs=require('fs');
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

// const fs=require('fs');

// function Rreadfile(){
//     let a =new promise (function(resolve,reject){
//         fs.readFile("a.txt","utf-8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }
// Rreadfile.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// function myOwnSetTime(fn, duration) {
//     setTimeout(fn, duration);
// }

// myOwnSetTime(function() {
//     console.log("hiii iam in myTimeout function");
//     myOwnSetTime(function() {
//         console.log("hiii iam inner function");
        
//         }, 1000);
// }, 5000);//i am calling function by passing function and time duration as an arguments


// function somesync1() {
//     console.log("somesync1");
// }
// function somesync2() {
//     console.log("somesync2");
// }
// function async(fn, duration) {
//     setTimeout(fn, duration);
//     somesync1();
//     somesync2();
//     console.log("async");
// }
// async(somesync2, 5000);

// const p=new Promise((resolve,reject)=>{
//     ondemand();
//     fs1();
//     fs2();
//     // resolve("success");
// });
// function ondemand(){
//     console.log("ondemand");
// }
// function fs1(){
//     console.log("fs1");
// }
// function fs2(){
//     console.log("fs2");
// }
// p.then(function(arg){
//     console.log(arg);
// });

// console.log("end of the program");

// function main(){
//     let a=[1,2,3,4,5,6,7,8,9,10];
//     let b=[];
//     for(let i=0;i<a.length;i++){
//         b[i]=(a[i]*2);
//     }
//     for(let j=0;j<a.length;j++){
//         console.log(b[j]);
//     }

// }

// class myPromise {
//     constructor(executor) {
//         this.state = "pending"; // Initial state
//         this.value = undefined; // Resolved value
//         this.callbacks = []; // Callbacks for then

//         const resolve = (value) => {
//             if (this.state === "pending") {
//                 this.state = "fulfilled";
//                 this.value = value;
//                 this.callbacks.forEach(callback => callback(this.value)); // Execute all stored callbacks
//             }
//         };

//         try {
//             executor(resolve); // Execute the provided executor function
//         } catch (error) {
//             console.error("Error in executor:", error);
//         }
//     }

//     then(onFulfilled) {
//         if (this.state === "fulfilled") {
//             onFulfilled(this.value); // If already resolved, call immediately
//         } else {
//             this.callbacks.push(onFulfilled); // Otherwise, store the callback
//         }
//     }
// }

// // Define a standalone function `functio`
// function functio() {
//     console.log("I am in functio...");
// }

// // Create an instance of `myPromise`
// let p = new myPromise(function (resolve) {
//     functio(); // Call `functio` immediately when executor runs
//     resolve(); // Resolve the promise
// });

// // Attach a `then` handler
// p.then(function () {
//     console.log("Walk like a king...");
// });

function sumofsquares(a,fn){
    fn(a*a);
}
sumofsquares(5,function(result){
    console.log(result);
});