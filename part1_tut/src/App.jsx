// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// const App = () => {
//   console.log("Hello from componente!") 
//     return (
//     <div>
//       <p>Hello world</p>
//       <p><b>Well, that didn't do jack shit.</b></p>
//     </div>
//   )
// }

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 0
  console.log(now, a+b)

  return (
    <div>
      <h2>This is a demonstration of some dynamic content being rendered on the console</h2>
      <h2>from the componente</h2>
      <p>Hello world, it is {now.toLocaleTimeString()}</p>
      <p>
        {a} divided by {b} is {a/b}
        <br></br>
        {a} PLUS {b} is {a+b}
      </p>
    </div>
  )
}
*/

// PHASE II
/*
const Hello = (prop) => {
    console.log(prop)
    return (
        <div>
            <p>Hello {prop.name}! It seems that you are {prop.age} years old!</p>
        </div>
    )
}

const Footer = (goodbye) => {
    return (
        <>
            <p>This is a goodbye message from the component to you {goodbye.name} ^_^</p>
        </>
    )
}
const App = () => {
    const name = 'Nayonika'
    const age = 14
    const friends = {name : "A", age: 10} // Cannot render objects directly
    return (
        <>
            <h1>This is a demonstration of usage of props.</h1>
            <h2>I am going to tell you, your name and your age.</h2>
            <h1>Greetings</h1>
            <Hello name='Anushka' age={20} />
            <Hello name={name} age={age} />
            <Footer name='{Khushi}'/>
            <p>{friends.name} {friends.age}</p>
        </> // These are all alternate methods to return stuff
    )
}


export default App

 */

// PHASE III
/*
const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old!
            </p>
            <p>
                You were probably born in {bornYear()}, or so I think.
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Anushka'
    const age = 20

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Nayonika" age={14} />
            <Hello name={name} age={age} />
        </div>
    )
}
 */

// const App = (props) => {
//     const {counter} = props
//     return (
//         <div>{counter}</div>
//     )
// }

/*
import { useState } from "react";

const App = () => {
    const [ counter, setCounter] = useState(0)

    setTimeout(
        () => setCounter((counter + 1)),
        1000
    )

    console.log('rendering...', counter)

    return(
        <div>
            {counter}
        </div>
    )
}
 */

export default App