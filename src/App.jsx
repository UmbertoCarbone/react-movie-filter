import { useState, useEffect } from 'react'
const categoryFilm = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
]




function App() {
  const [list, setList] = useState(categoryFilm)
  const [item, setItem] = useState("")
  const [search, setSearch] = useState("")



  function handleSubmit(e) {
    e.preventDefault();
    setList([...list,
    { title: item, }
    ])
    setItem("");
  }

  useEffect(() => {

    const filtered = list.filter(film =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filtered);
  }, [search,list]);


  return (
    <div className="container text-center">
      <h1 className="bg-secondary-subtle">Film</h1>
      {/* Ricerca */}
      <input
        type="text"
        placeholder="Cerca film..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="list-unstyled">
        {/* Array film */}
        {list.map((film) => (
          <li key={film.title}>
            <strong>{film.title}</strong> - <em>{film.genere}</em>
          </li>
        ))}
      </ul>
      {/* Aggiungi Film */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={item.title} onChange={e => { setItem(e.target.value) }} />
        <button type="submit" className="btn btn-success ms-2">
          <i className="bi bi-plus"></i>
        </button>
      </form >
    </div>
  )
}


export default App
