import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Feed from './pages/feed';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Feed" element={<Feed />}/>
      </Routes>
    </Router>
  );
};

export default App;