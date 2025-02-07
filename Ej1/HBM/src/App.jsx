import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Libro from "../componentes/Libro.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Libro
        id='2ad6b5e2-9c2b-4959-b740-9335c85eed74'
        titulo='1984'
        autor='George Orwell'
        portada='https://imagessl4.casadellibro.com/a/l/t7/44/9788499890944.jpg'
      />
      <Libro
        id='9bbf84ae-20bc-4477-89c9-eab36ac417dd'
        titulo='¿Sueñan los androides con ovejas eléctricas?'
        autor='Phillip K. Dick'
        portada='https://imagessl7.casadellibro.com/a/l/t7/57/9788445006757.jpg'
      />
    </>
  )
}

export default App
