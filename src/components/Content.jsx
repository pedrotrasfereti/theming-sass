import React from 'react'

const Content = () => {
  return (
    <li id="Content" className="Item">
      <header id="Header">
        <span className="Heading">
          Título
        </span>
      </header>
      <main id="Main">
        <textarea
          id="TextArea"
          placeholder="Escreva aqui"
        />
        <button id="Button">
          Botão
        </button>
      </main>
    </li>
  )
}

export default Content
