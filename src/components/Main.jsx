import languages from '../data/languages'
import { useState } from 'react'

function Main() {
  const [selectedLang, setSelectedLang] = useState(0)
  const [title, updateTitle ] = useState('Nessun linguaggio selezionato')
  const [desc, updateDesc] = useState('')

  function updateTab(id) {
    const language = languages.find(lang => lang.id === id)
    setSelectedLang(id)
    updateTitle(language.title)
    updateDesc(language.description)
  }

  return (
    <div className='container py-5'>
      <div className="buttons-row">
        {languages.map(lang => (
          <div key={lang.id} className={`btn mx-1 ${lang.id === selectedLang ? 'btn-warning' : 'btn-primary'}`} onClick={() => updateTab(lang.id)}>{lang.title}</div>
        ))}
      </div>
      <div className="result-area">
        <div className="result-content my-3 p-4 border border-2 rounded">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Main