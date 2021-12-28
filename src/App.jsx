/*-==================== REACT ====================-*/
import React from 'react'

/*-==================== ESTILO ====================-*/
import './styles/App.scss'

/*-================== COMPONENTES ==================-*/
import Switch from './components/Switch'
import Content from './components/Content'

function App() {
  // Função de mudança de tema
  const handleToggle = () => {
    const root = document.getElementById('theme-root')

    root.classList.toggle('theme--light')
    root.classList.toggle('theme--dark')
  }

  return (
    /*
      O ponto de entrada para o o mapa Sass deve:
        - Ser uma div.
        - Abraçar todo o código em que o tema é utilizado.
        - Possuir como única classe a do tema.
    */
    <div id="theme-root" className="theme--light">
      <div id="App">
        <ul id="List">
          <Switch handleToggle={handleToggle} />
          <Content />
        </ul>
      </div>
    </div>
  )
}

export default App
