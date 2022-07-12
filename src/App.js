import React,{useState} from 'react';
import 'antd/dist/antd.min.css'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Pricing from './pages/pricing'
import Admin from './pages/admin'
import AdminLogin from './pages/adminLogin'
import Book from './pages/book'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop'
import Success from './pages/success';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  const clickToggle = ()=>{
    setIsOpen(!isOpen)
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  const clickScrollUp = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <Router>
      <Navbar toggle={toggle} clickScrollUp={clickScrollUp}/>
      <Sidebar isOpen={isOpen} toggle={toggle} clickToggle={clickToggle}/>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/admin88" element={<Admin/>} />
        <Route path="/admin88login" element={<AdminLogin/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
      </ScrollToTop>
      <Footer/>

    </Router>
  )
}

export default App;
