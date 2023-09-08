
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './friends'

function App() {
  function handelClick(){
    alert('Button click')
  }
  const handelClick2 = () =>{
    alert('button click 2')
  }
  const addToFive = (Num) =>{
    alert(Num + 5);
  }
  

  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
     <Users></Users>

      <Team></Team>

      <Counter></Counter>
      

      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>four</button>
      
      
    </>
  )
}

export default App
