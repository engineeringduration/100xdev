import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todos, settodos] = useState([{
    title:"a new to do",
    description:"a t1 description1",
    completed: false
  },
    {
      title:"t2",
      description:"d2",
      completed: false
    },
    {
      title:"t2",
      description:"d2",
      completed: false
    } , ]);
  
    function addTodo(){
      //[1,2]
      //[...todos,3]=>[1,2,3]
      settodos([...todos,{ //copying the data from set todos to todos and adding one extra filedl of title and description for new todo
        title:"new todo",
        description:"description of new todo"
      }])
    }

    return(
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {/* <todo title={todos[0].title},description={todos[0].description}/>
        <todo title={todos[1].title},description={todos[1].description}/>
        */}
        {todos.map(function(todo){
          return<todo title={todo.title} description={todo.description}/>
        })}

        
      </div>
    )


// //component
// function CustomButton(props){
//   function onClickHandler(){
//     <div>
//       <p>fwihrif</p>hiii
//     </div>
//     console.log("whfwhfwhfiwhi")
//   }

//   return <button onClick={props.todos}>
//     TOdo{props.todos}
//   </button>
// }

function Todo(props){  //return 
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>

}
}
export default App
