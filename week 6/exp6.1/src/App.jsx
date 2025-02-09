// import { useState } from "react";
// import React,{Fragment} from "react";
// function App() {

import { useEffect, useState } from "react";

  
//   return (
//     <div>
      
//       <HeaderWithButton ></HeaderWithButton>
//       <Header title={title} />
//       <Header title="Hello21" />
//     </div>
//   );
// }

// function HeaderWithButton(){
//   const [title, setTitle] = useState("My name is Rohit");  

//   function Update() {
//     setTitle("My name is " + Math.random()); // Limiting decimal places
//   }

//   return <>
//   <button onClick={Update}>Click me!!</button>
//   <Header title={title}></Header>
//   </>
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

//Todo


// import { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gyn",
//       description: "go to gyn today"
//     },
//     {
//       id: 2,
//       title: "eat food",
//       description: "eat food"
//     },
//     {
//       id: 3,
//       title: "go to class",
//       description: "go to class"
//     }
//   ]);

//   function addTodo() {
//     setTodos([...todos, {
//       id: 4,
//       title: Math.random(),
//       description: Math.random()
//     }]);

//     // const newTodos =[Todo];
//     // for (let i = 0; i < todos.length; i++) {
//     //   newTodos.push(todos[i]);
//     // }

//     // // newTodos = todos
//     // newTodos.push({
//     //   id: 4,
//     //   title: Math.random(),
//     //   description: Math.random()
//     // });

//     // // existing ones + 1
//     // setTodos(newTodos);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => <Todo key={title.id}   title={todo.title} description={todo.description} />)}
//     </div>
//   );
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>;
// }

// export default App;

// function App(){
//   return <div>
//     <CardWrapper innerComponent={<TextComponent/>}/>
//   </div>
// }
// function TextComponent(){
//   //create a div 
//   return <div >
//     hey there!!
//   </div>
// }
// function CardWrapper({innerComponent}){
//   //create a div 
//   return <div style={{border: "2px solid black"}}>
//   {innerComponent}
//   </div>
// }

// function App(){
//   let[counter,setCounter]=useState(0)

//   useEffect(()=>{
//     alert("counter is"+counter);
//     return Add();
//   },[counter])
  
//   return <div>
//     <button onClick={()=>{
//       setCounter(counter++);
//     }}>Increse the count</button>
//     <p>I am a Disco dancer !!!</p>
//     <p>Zindagi mera gana!!!</p>
//     <p>Muze sune sara jamana...</p>
//     <p>I am a Disco Danceerrrr!!!!...</p>
//   </div>

// }
// function Add(){
// return <>
// <p>I ama from adedd</p></>
// }


// import axios from "axios";

// function App() {
// const [selectedId,setSelectedId]=useState(1);
//   return(
//       <>


//         <button onClick={()=>{
//           setSelectedId(1);
//         }}>1</button>
//         <button onClick={()=>{
//           setSelectedId(2);
//         }}>2</button>
//         <button onClick={()=>{
//           setSelectedId(3);
//         }}>3</button>
//         <todo id={selectedId}/>
//         </>
//       );
//     }
        //return(<>
    //  <button onClick={()=>{
    //   <todo id={1}/>
    //  }}>1</button>
    //  <button onClick={()=>{
      //   <todo id={2}/>
      //  }}>2</button>
      //  <button onClick={()=>{
        //   <todo id={3}/>
        //  }}>3</button>
        // </>);
        //Anotgher solution

// function todo({ id}) {
//   const [todo,setTodos]=useState([]);
// //use effect 
// console.log("gyedgedgh");

 
// useEffect(() => {
//   console.log(id)
//   // axios.get("https://sum-server.100xdevs.com/todos")
//   //   .then(function(response) {
//   //     setTodos(response.data.todos);
//   //   });
// }, [id]);

//   return <div>
//     <h1>{todo.titel}</h1>
//     {todo.description}
//   </div>;
// }

// export default App; 



function App() {
  const [value, setValue] = useState("");
  const [out, setOut] = useState(null);
  let [counter, setCounter] = useState(0);
  let [finalVal, setFinalVal] = useState(0);

  useEffect(() => {
    function calc(val) {
      let c = (val * (val - 1)) / 2;
      setOut(c);
      setFinalVal(c);
    }
    if (value !== "") { // Check if value is not empty before calculation
        calc(parseInt(value)); // Parse value to integer before calculation
    } else {
        setFinalVal(0); // Reset finalVal if input is empty
    }
  }, [value]);

  return (
    <>
      <input
        id="in"
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // calc(e.target.value);
        }}
        title={value}
      />
      <p>Output: {finalVal}</p>
      <button onClick={() => {
        setCounter(counter + 1); // Correct counter increment
      }}>Counter {counter}</button>
      {/* 
        //here whenever the counter clicked then input output re-renders which is unnecessary 
        // now we take help of useEffect function to get called and re-rendered after the the input value is changed */}
    </>
  );
}

export default App;