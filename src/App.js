import { useState } from 'react'

import './styles.css'
import Label from './Label'
import Button from './Button'

const App = () => {
  
  const [name, setName] = useState("Hello")

  const obj = {
   firstName: "Rene",
   lastName: "Krewinkel"
  }

  const showAlert = () => {
    setName("pietje")
  }

  return (
    <div>

      <Label text={ name } 
             kleur={`blauw`} 
             fontSize={ 20 } />

      <Button text={`klik mij!`} action={ showAlert } />
      
     </div>
   )
  
}

export default App
