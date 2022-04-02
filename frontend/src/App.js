import React from 'react';
import './App.css'
import Header from './components/Header'
import Upload from './components/upload'
import Setup from './components/Setup'

import { Route, Routes } from "react-router-dom";

function App() {

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/modelsList")
  //     .then(response => response.json())
  //     .then((json => {
  //       setModelList(json)
  //     })
  //     )
  // })

  return (
    <div className="App">
      <Header /> <br />
      <Setup />

      <Routes>
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
    </div>

  )
}

export default App
