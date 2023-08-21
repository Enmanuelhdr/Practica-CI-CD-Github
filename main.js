import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Saludos</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Integrantes:
    </p>
    <p class="read-the-docs">
      <strong>
        Enmanuel Heredia & ingresa tu nombre
      </strong>
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
