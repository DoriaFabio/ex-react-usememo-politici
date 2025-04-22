import { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import ListPoliticians from './components/listPoliticians';

const apiUrl = "https://boolean-spec-frontend.vercel.app/freetestapi/politicians";

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(p => {
      const isName = p.name.toLowerCase().includes(search.toLowerCase());
      const isDesc = p.biography.toLowerCase().includes(search.toLowerCase());
      return isName || isDesc;
    });
  }, [politicians, search]);

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((res) => res.json())
    //   .then((data) => setPoliticians(data))
    //   .catch((err) => console.error(err))
    axios.get(apiUrl).then((res) => {
      setPoliticians(res.data);
    })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  console.log(politicians);

  return (
    <div className="container mx-auto px-10">
      <h1 className='font-bold text-3xl text-center my-3'>Lista di politici</h1>
      <input
        type="text"
        placeholder="Cerca per nome o biografia"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="bg-amber-50 rounded-2xl text-black p-2"
      />
      <ListPoliticians list={filteredPoliticians} />
    </div>
  )
}

export default App