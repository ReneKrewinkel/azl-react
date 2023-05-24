import './styles.css'
import Label from './Label'
import Button from './Button'

const App = () => {
  
  const obj = {
   firstName: "Rene",
   lastName: "Krewinkel"
  }

  const showAlert = () => {
    alert(`Dit komt uit App`)
  }

  const name = `hello ${ obj.firstName} ${obj.lastName}`

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
