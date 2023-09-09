
import './App.css'
import Team from './Team';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
function App() {
  
function handleClick(){
  alert('clicked');
}

const handleClick2 = (num)=>{
  alert(num+5);
}
  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleClick2(5)}>Click 2</button>
      
    </>
  )
}

export default App
