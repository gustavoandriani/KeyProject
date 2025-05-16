import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  //
  return (
    <>
      <div className='container'>
        <h1>{count}</h1>
        <div className="containerButtons">
          <button onClick={(ev) => setCount(count + 1)}>SENHA ATENDIMENTO</button>
          <button>SENHA PREFERENCIAL</button>
        </div>
      </div>
    </>
  )
}

export default App
