import "./styles.css";
import {useState,useEffect} from 'react';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [val,setVal] = useState('');
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem('newItem'));
    if(storage) setTodos(prevValue=> [...prevValue,...storage]);
  },[])
  useEffect(()=>{
    localStorage.setItem('newItem',JSON.stringify(todos))
  },[todos])
  function handleClick(){
    setTodos(prevValue=>[...prevValue,val]);
    setVal('')
 }
 function handleChange(e){
   setVal(e.target.value);
 }
 function delFunc(id){
    setTodos(todos.filter((todo)=> todo !== id));

 }
  return (
    <div className="App">
      <h1>To-Do</h1>
     
        <input type='text' onChange={handleChange} value={val}/>
        <button onClick={handleClick}>GO</button>
        {todos.map(todo=><Todo key ={uuidv4()} delId={todo} delFunc={delFunc} val={todo}/>)}
    </div>
  );
}
