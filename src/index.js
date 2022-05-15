import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const changeState = actionType => {
    store.dispatch({
      type: actionType
    })
  }

  return (
    <div>
      <button onClick={() => changeState('GOOD')}>good</button>
      <button onClick={() => changeState('OK')}>ok</button>
      <button onClick={() => changeState('BAD')}>bad</button>
      <button onClick={() => changeState('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
