import React, {useState} from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

import './App.css';

function App() {
 const [likes, setLikes] = useState(5)
 const [value, setValue] = useState('text')


 
  return (
    <div className="App">
    {/* <Counter/> */}
    <ClassCounter/>

  
    </div>
  );
}

export default App;
