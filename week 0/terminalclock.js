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

//to claculate time taken to execute an function
function sum(){
    let a=0;
    for(let i=0;i<1000000000;i++){
        a=a+i;
    }
}

const beforeDate=new Date();
const beforeTime=beforeDate.getTime();
sum();
const afterDate=new Date();
const afterTime=afterDate.getTime();
console.log("Time taken to execute the function is "+(afterTime-beforeTime)+"ms");