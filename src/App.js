import React from 'react';
import MainHeader from './HomeComponents/Mainheader';
import Home from './Pages/Home';

import AdminPage from './Pages/AdminPage';
import Contact from './HomeComponents/Contact';
import LoginPage from './LoginComponent/LoginPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DoctorPage from './Pages/DoctorPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="admin" element={<AdminPage />} />
                    <Route path='doctor' element={<DoctorPage/>}/>
                </Routes>
               
            </BrowserRouter>
        </>
    );
}

export default App;
