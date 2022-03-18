import './allPeople.css'

export default function allPeope() {

 const [allPeople, setAllPeople] = useState([])

    
  useEffect(() => {
    async function fetchPeoples() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setAllPeople(data.results)
    }
    fetchPeoples()   
    }, [])

  console.log(allPeople)
    return (
        <div>
            allPeope
        </div>
    )
}