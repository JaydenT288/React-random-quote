import './App.css';
import {useEffect, useState} from 'react'
import Advice from './Advice';

function App() {

  const [advice, setAdvise] = useState('')
  const [getNew, setGetNew] = useState(false)


  useEffect(() =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setAdvise(data.slip.advice))
    
  },[getNew])

  
  return (
    <div className="App">
      <Advice advice={advice} getNew={getNew} setGetNew={setGetNew}/>
    </div>
  );
}

export default App;
