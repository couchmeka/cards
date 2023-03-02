
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import BasicExample from './Rows';
import { useEffect, useState } from 'react';



const DATA_URL = "https://rickandmortyapi.com/api/character"
function App() {

const [cardData, updateCards] = useState({})

  useEffect(() => {

    //asyncronously request data 
    // wait for promise to resolve
    // const moviesData = []
    fetch(DATA_URL)
    .then((result) => result.json())
    .then((result) => {
      updateCards(result.results)

    });
  
    }, [])





  return (
    <div className="App">
      
      <BasicExample data = {cardData}/>
      
    </div>
  );
}

export default App;
