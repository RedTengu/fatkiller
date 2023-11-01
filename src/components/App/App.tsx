import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
