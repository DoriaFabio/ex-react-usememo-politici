import { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import ListPoliticians from './components/listPoliticians';

const apiUrl = "https://boolean-spec-frontend.vercel.app/freetestapi/politicians";

function App() {
  const [politicians, setPoliticians] = useState([]);

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
    <div className="container mx-auto px-20">
      <ListPoliticians list={politicians} />
    </div>
  )
}

export default App