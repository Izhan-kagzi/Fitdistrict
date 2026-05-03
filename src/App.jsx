import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Status from './pages/Status.jsx'
import Admin from './pages/Admin.jsx'

// This wrapper provides the standard look for public pages
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      {/* 1. Pages WITHOUT Navbar/Footer (Full Screen) */}
      
      {/* Admin Panel */}
      <Route path="/admin" element={<Admin />} />
      
      {/* New Professional Login/Signup Page */}
      <Route path="/login" element={<Login />} />


      {/* 2. Pages WITH Navbar/Footer (Wrapped in Layout) */}
      
      <Route path="/" element={
        <Layout><Home /></Layout>
      } />
      
      <Route path="/about" element={
        <Layout><About /></Layout>
      } />
      
      <Route path="/gallery" element={
        <Layout><Gallery /></Layout>
      } />
      
      <Route path="/contact" element={
        <Layout><Contact /></Layout>
      } />
      
      <Route path="/status" element={
        <Layout><Status /></Layout>
      } />
      
    </Routes>
  )
}