import langs from '../data/languages'
import { useState } from 'react'
import Button from './partials/Button'

function Main() {
  const [selectedLang, setSelectedLang] = useState({id:0, title: 'Nessun linguaggio selezionato', description: ''})

  function updateLang(id) {
    const language = langs.find(lang => lang.id === id)
    setSelectedLang({
      id: language.id,
      title: language.title,
      description: language.description
    })
  }

  return (
    <div className='container py-5'>
      <div className="buttons-row">
        {langs.map(lang => (
          <Button key={lang.id} title={lang.title} onSelect={() => updateLang(lang.id)} isActive={lang.id === selectedLang.id && true }/>
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