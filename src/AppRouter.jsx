import contact from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import App from './App'

const AppRouter = () => {
return (
    <BrowserRouter>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/Profile'>Profile</Link>
        <Link to='/contact'>Kontak</Link>
        <Link to='/About'>About</Link>
        </nav>
        <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
);
};export default AppRouter;