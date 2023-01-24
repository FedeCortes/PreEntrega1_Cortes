import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer texto="Seoxfit se dedica a la venta de suplementos"></ItemListContainer>
      
    </div>
  )
}

export default App
