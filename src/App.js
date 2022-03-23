import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
