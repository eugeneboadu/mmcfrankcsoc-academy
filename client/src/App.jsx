import StoryDetail from './pages/StoryDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Stories from './pages/Stories'
import Join from './pages/Join'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import Members from './pages/Members'
import BlogManagement from './pages/BlogManagement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stories/:id" element={<><Navbar /><StoryDetail /><Footer /></>} />
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/stories" element={<><Navbar /><Stories /><Footer /></>} />
        <Route path="/join" element={<><Navbar /><Join /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/members" element={<Members />} />
        <Route path="/dashboard/blog" element={<BlogManagement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App