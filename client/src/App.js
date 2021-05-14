import React,  {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [memes, setMemes] = useState([])
  useEffect(() => {
    async function getMemes() {
      const resp = await fetch ('http://localhost:5000/api/memes')
      const json = await resp.json ()
      console.log({json});

    }
    getMemes()
  }, []) 
  return (
    <div className="App">
      <h1> Meme</h1>
      
    </div>
  );
}

export default App;
