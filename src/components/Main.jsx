import languages from '../data/languages'
import { useState } from 'react'

function Main() {
  const [selectedLang, setSelectedLang] = useState({id:0, title: 'Nessun linguaggio selezionato', description: ''})

  function updateLang(id) {
    const language = languages.find(lang => lang.id === id)
    setSelectedLang({
      id: language.id,
      title: language.title,
      description: language.description
    })
  }

  return (
    <div className='container py-5'>
      <div className="buttons-row">
        {languages.map(lang => (
          <div key={lang.id} className={`btn mx-1 ${lang.id === selectedLang.id ? 'btn-warning' : 'btn-primary'}`} onClick={() => updateLang(lang.id)}>{lang.title}</div>
        ))}
      </div>
      <div className="result-area">
        <div className="result-content my-3 p-4 border border-2 rounded">
          <h1>{selectedLang.title}</h1>
          <p>{selectedLang.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Main