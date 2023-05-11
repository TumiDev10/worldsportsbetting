import './App.css';
import Lotto from './Lotto';
import LottoHowTo from './lottoHowTo';
import DailyLotto from './dailyLotto';
import PowerBall from './Powerball';
import PowerballHowTo from './PowerballHowTo';
import Sportstake8 from './Sportstake8';
import Propick from './Propick';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lotto />} />
          <Route path="/lottoHowTo" element={<LottoHowTo />} />
          <Route path="/dailyLotto" element={<DailyLotto />} />
          <Route path="/Powerball" element={<PowerBall />} />
          <Route path="/PowerballHowTo" element={<PowerballHowTo />} />
          <Route path="/Sportstake8" element={<Sportstake8 />} />
          <Route path="/Propick" element={<Propick />} />
          Propick
        </Routes>
      </div>
    </Router>
  );
}

export default App;
