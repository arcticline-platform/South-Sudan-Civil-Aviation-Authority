import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import SafetyAndSecurity from './pages/SafetyAndSecurity'
import LawsRegulations from './pages/LawsRegulations'
import Licensing from './pages/Licensing'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/safety-and-security" element={<SafetyAndSecurity />} />
              <Route path="/laws-and-regulations" element={<LawsRegulations />} />
              <Route path="/licensing-types" element={<Licensing />} />
              <Route path="/FAQs" element={<FAQs />} />
              <Route path="/contact-us" element={<Contact />} />
            </Route>
      </Routes>
    </>
  )
}

export default App
