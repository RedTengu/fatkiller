import { useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import CardList from '../CardList/CardList';
import Profile from '../Profile/Profile';
import StatFull from '../StatFull/StatFull';
import WeightStat from '../WeightStat/WeightStat';
import KcalStat from '../KcalStat/KcalStat';
import WorkoutStat from '../WorkoutStat/WorkoutStat';

import './Main.css';

function Main() {
  const location = useLocation();
  const navigate = useNavigate();

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
          <Route path="weight" element={<WeightStat />} />
          <Route path="kcal" element={<KcalStat />} />
          <Route path="workout" element={<WorkoutStat />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Main;