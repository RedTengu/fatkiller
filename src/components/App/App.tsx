import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import WeightDiaryPopup from '../WeightDiaryPopup/WeightDiaryPopup';
import KcalDiaryPopup from '../KcalDiaryPopup/KcalDiaryPopup';
import WorkoutDiaryPopup from '../WorkoutDiaryPopup/WorkoutDiaryPopup';

import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <WeightDiaryPopup />
      <KcalDiaryPopup />
      <WorkoutDiaryPopup />
    </>
  );
}

export default App;
