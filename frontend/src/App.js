import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CompHeader from '../src/components/header'
import CompFooter from '../src/components/footer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <CompHeader />
      </div>
      <Routes>
        <Route path='/footer' element={<CompFooter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
