// import { useState } from 'react'
// import Name from './components/Name'
// const App = () => {
//     const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
//     const [newName, setNewName] = useState('')

//     const addName = (event) => {
//         event.preventDefault()
//         const nameObject = {
//             name: newName
//         }

//         const isDuplicate = persons.some(
//             person => person.name.toLowerCase() === newName.toLowerCase()
//         )

//         if (isDuplicate) {
//             window.alert(`${newName} is already added to phonebook`)
//             return
//         }

//         console.log(persons)
//         setPersons(persons.concat(nameObject))
//         setNewName('')
//     }
//     const handleNameChange = (event) => {
//         setNewName(event.target.value)
//     }

//     return (
//         <div>
//             <h2>Phonebook</h2>
//             <form onSubmit={addName}>
//                 <div>
//                     name: <input
//                             value={newName}
//                             onChange={handleNameChange}
//                             />
//                 </div>
//                 <div>
//                     <button type="submit">add</button>
//                 </div>
//             </form>
//             <h2>Numbers</h2>
//             {persons.map((person, index) =>
//                 <Name key={index} name={person} />
//             )}
//         </div>
//     )
// }

// export default App

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setPersons(persons.concat(newName))
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} 
            onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => person.name)
      }
    </div>
  )
}

export default App