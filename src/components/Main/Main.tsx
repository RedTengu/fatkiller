// React
import { useEffect} from 'react';
// React Router
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Components
import NotFound from '../NotFound/NotFound';
import CardList from '../CardList/CardList';
import Profile from '../Profile/Profile';
import StatFull from '../StatFull/StatFull';
import StatsList from '../StatsList/StatsList';

// CSS
import './Main.css';

function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  // Если путь соответствует условию - перенаправлять на статистику веса
  useEffect(() => {
    if(location.pathname === '/stats' || location.pathname === '/stats/') {
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