import logo from './logo.svg'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Content from './components/Content'
import Loading from '../src/components/Loading'
import P1_Details from './models/P1_Details'
import P2_Details from './models/P2_Details'
import P3_Details from './models/P3_Details'
import P4_Details from './models/P4_Details'
import P6_Details from './models/P6_Details'
import P7_Details from './models/P7_Details'

import P8_Details from './models/P8_Details'
import P9_Details from './models/P9_Details'
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [modelList, setModelList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetch("http://localhost:5000/api/v1/modelsList")
      .then(response => response.json())
      .then((json => {
        setModelList(json)
      })
      )
  })

  return (

    <div className="App">

      <Header /> <br />

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contents" element={<Content />} />
        <Route exact path="/p1" element={<P1_Details />} />
        <Route exact path="/p2" element={<P2_Details />} />
        <Route exact path="/p3" element={<P3_Details />} />
        <Route exact path="/p4" element={<P4_Details />} />
        <Route exact path="/p5" element={<P6_Details />} />
        <Route exact path="/p6" element={<P7_Details />} />
        <Route exact path="/p7" element={<P8_Details />} />
        <Route exact path="/p8" element={<P9_Details />} />
      </Routes>
    </div>

  )
}

export default App
