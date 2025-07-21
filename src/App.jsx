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
  const [genere, setGenere] = useState("")
  const [search, setSearch] = useState("")
  const [searchCategoria, setSearchCategoria] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, { title: item, genere: genere }])
    setItem("");
    setGenere("");
  }

  useEffect(() => {
    const filtered = list.filter(film =>
      film.title.toLowerCase().includes(search.toLowerCase()) &&
      film.genere.toLowerCase().includes(searchCategoria.toLowerCase())
    );
    setFilteredMovies(filtered)
  }, [search, searchCategoria, list]);

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
      <input
        type="text"
        placeholder="Cerca Categoria..."
        value={searchCategoria}
        onChange={e => setSearchCategoria(e.target.value)}
      />
      <ul className="list-unstyled">
        {filteredMovies.map((film, idx) => (
          <li key={film.title + film.genere + idx}>
            <strong>{film.title}</strong> - <em>{film.genere}</em>
          </li>
        ))}
      </ul>
      {/* Aggiungi Film */}
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
          placeholder="Titolo nuovo film"
          className="me-2"
        />
        <input
          type="text"
          value={genere}
          onChange={e => setGenere(e.target.value)}
          placeholder="Categoria nuovo film"
          className="me-2"
        />
        <button type="submit" className="btn btn-success">
          <i className="bi bi-plus"></i>
        </button>
      </form>
    </div>
  )
}

export default App 