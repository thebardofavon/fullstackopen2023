import { useState } from 'react'
const App = () => {
   const [left, setLeft] = useState(0)
   const [right, setRight] = useState(0)
   const [allClicks, setAll] = useState([])

   const handleLeftClick = () => {
       setLeft(left + 1)
       setAll(allClicks.concat('L'))
   }

   const handleRightClick = () => {
       setRight(right + 1)
       setAll(allClicks.concat('R'))
   }

   return (
       <div>
           {left}
           <button onClick={handleLeftClick}>L</button>
           <button onClick={handleRightClick}>R</button>
           {right}
           <p>{allClicks.join(' ')}</p>
       </div>
   )
}
export default App