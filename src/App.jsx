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
   function handleSubmit(e) {
    e.preventDefault();
    setList([
      ...list,
      {
        id: crypto.randomUUID(),
        title: item,
      }
    ])
    setItem("");
  }

  return (
    <div className="container text-center">
      <h1 className="bg-secondary-subtle">Film</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={e => { setItem(e.target.value) }} />
        <button type="submit" className="btn btn-success ms-2">
          <i className="bi bi-plus"></i>
        </button>
      </form >
      <ul className="list-unstyled">
        {list.map((film) => (
          <li key={film.title}>
            <strong>{film.title}</strong> - <em>{film.genere}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App
