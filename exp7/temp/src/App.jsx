// =================   Props Code ==============================
// export default function App() {
//   return (<Student name="Abhinav" />)
// }

// function Student(props) {
//   return (
//     <h1> Hello, {props.name}</h1>
//   )
// }

// ======================== Use State ========================


// import { React, useEffect, useState } from "react";

// export default function App() {

//   let [count, setCount] = useState(0)

//   function incCounter() {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={incCounter}>Count Up</button>
//     </>
//   )
// }


// ========================= use effects ============================

import { useState, useEffect } from "react";

export default function App() {
  let [name, setName] = useState("Abhinav");

  useEffect(()=>{
    document.title = name 
  },[name])

  function changeName(){
    setName("Abhinav Thakur");
  }
  return (
    <>
      <h1> Name {name} </h1>
      <button onClick={changeName}>Click</button>
    </>
  )

} 

