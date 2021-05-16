import React,  {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [memes, setMemes] = useState([])
  const [file, setFile] = useState(null)
  useEffect(() => {
    async function getMemes() {
      const resp = await fetch ('http://localhost:5000/api/memes')
      const json = await resp.json ()
      console.log({json});
      setMemes(json.data)

    }
    getMemes()
  }, []) 
  const handleCreateMeme = async (e) => {
    e.preventDefault()
    if(!file) alert('Hey, Pls a file')
    const formData = new FormData() 
    formData.append('image', file) 
    formData.append('texts', 
    JSON.stringify([
      {
        size: 128,
        color: "Black",
        alignmentX: "HORIZONTAL_ALIGN_CENTER",
        alignmentY: "VERTICAL_ALIGN_BOTTOM",
        content: "Sucks at coding",

      },
    ]),
    );
    const resp = await fetch('http://localhost:5000/api/memes', {
      method: 'POST',
      body: formData,
    });
    const json = await resp.json ()
    setMemes([json.data, ...memes])
      
  } 
  return (
    <div className="App">
      <h1> Create Meme</h1>
      <form>
        <input type = "file" onChange= {(e) => setFile(e.target.files[0])}/>
        <button onClick = {handleCreateMeme}> Upload file </button> 
      </form>
      <h1> Meme</h1>
      {memes.map((m) =>{
        const url = "http://localhost:5000/" + m.outputMemePath.split('public/')[1]

        return <img key= {m.id} src={url} style = {{height: 400, width: 400}} />;})}
    </div>
    
  );
}

export default App;
