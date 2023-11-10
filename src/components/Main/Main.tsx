import { useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import CardList from '../CardList/CardList';
import Profile from '../Profile/Profile';
import StatFull from '../StatFull/StatFull';
import StatsList from '../StatsList/StatsList';

import './Main.css';

function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  // Исправить баг со /stats/
  useEffect(() => {
    if(location.pathname === '/stats') {
      navigate('/stats/weight');
    }
  }, [location.pathname, navigate]);

  return (
    <main className="content">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<CardList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stats" element={<StatFull />}>
          <Route path="weight" element={<StatsList />} />
          <Route path="kcal" element={<StatsList />} />
          <Route path="workout" element={<StatsList />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Main;