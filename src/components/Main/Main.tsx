import { Routes, Route } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import CardList from '../CardList/CardList';
import Profile from '../Profile/Profile';

import './Main.css';

function Main() {
  return (
    <main className="content">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<CardList />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default Main;