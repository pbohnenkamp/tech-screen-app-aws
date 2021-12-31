import React from "react"
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Routes>
            <Route path="/foo" element={
              <p>
                I AM FOO! Hear me ROAR!
              </p>
            }>
            </Route>
            <Route path="/" element={
              <>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </>
            }>
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
