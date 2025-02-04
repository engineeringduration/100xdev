// // var a=1;
// // a=2;
// // console.log(a);

// // let name = 'John';
// // let age = 25;
// // let isMarried = false;

// // if (isMarried===true) {
// //     console.log(name + ' is married!');
// // } else {
// //     console.log(name + ' will hopefully marry soon :)');
// // }

// // let ans =0;
// // let n=0;
// // for (let i=0; i<10; i++) {
// //     n = n + i;
// //     console.log(i+')  '+n);

// // }

// // //arrays and objects
// // const person=['rohit','ram','shyam'];
// // const ages=[20,30,40];

// // for(let i=0;i<person.length;i++){
// //     if(person[i]=='ram'){
// //         console.log('Age of Ram is '+ages[i]);
// //     };
// // }

// // let a=[1,2,3,4,5];
// // let max=a[0];
// // for(let i=0;i<a.length;i++){
// //     if(a[i]>max){
// //         max=a[i];
// //     }
    
// // }
// // console.log(max);

// //settimeout

// // function myFunction() {
// //     console.log('Hello World!');
// // }
// // setTimeout(myFunction, 3000); // 3 seconds

// // Terminal clock in JavaScript

// function clearConsole() {
//     // Clear the console by logging many empty lines
//     console.clear();
// }

// function terminalClock() {
//     try {
//         setInterval(() => {
//             // Get the current time in HH:MM:SS format
//             const now = new Date();
//             const hours = String(now.getHours()).padStart(2, '0');
//             const minutes = String(now.getMinutes()).padStart(2, '0');
//             const seconds = String(now.getSeconds()).padStart(2, '0');
//             const currentTime = `${hours}:${minutes}:${seconds}`;

//             // Clear the console
//             clearConsole();

//             // Display the current time
//             console.log('\n\n\n\n\n'); // Add some padding
//             console.log(currentTime.padStart(40 + currentTime.length / 2, ' ')); // Center the time
//         }, 1000);
//     } catch (error) {
//         console.error('Clock stopped:', error);
//     }
// }

// // Run the terminal clock
// terminalClock();
// // setInterval(() => {
// //     const now=new Date();
// //     const hours = String(now.getHours());
// //     const minutes = String(now.getMinutes());
// //     const seconds = String(now.getSeconds());
// //     const currentTime = `${hours}:${minutes}:${seconds}`;
// //     console.log(currentTime);
    
// //     setInterval(console.clear, 2000);
// // }, 1000);

// const a= "          Rohit          mane          . "
// console.log(a.trim());
console.log(parseInt("23plplpkpkp5333"))