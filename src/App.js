import axios from 'axios';
import   {useState, useEffect} from 'react';
import './App.css';
 

function App() {
  const [loadMore, setLoadMore] = useState('https://swapi.dev/api/people/1/')
  const [input, setInput] = useState(1)

  const getAllSw = async () => {
    axios.get(loadMore)
      .then(function ({data}) {
      console.log(data.name)
    })

 
  }

    useEffect(() => {
        getAllSw()
    }, [])

  return (
    <div className="container">
      <h1>StarWars Api</h1>
      
      <input type="text" className="input" value={input}/>

      <div className='box'>
        d
      </div>
      <div>
        <button className="button">information</button>
      </div >
    </div>
  )

}
  export default App;

