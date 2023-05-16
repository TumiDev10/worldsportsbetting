import './App.css';
import Lotto from './Lotto';
import LottoHowTo from './lottoHowTo';
import DailyLotto from './dailyLotto';
import DailyLottoResults from './dailyLottoResults';
import LottoResults from './LottoResults';
import PowerBall from './Powerball';
import PowerballHowTo from './PowerballHowTo';
import Sportstake8 from './Sportstake8';
import Sportstake13 from './Sportstake13';
import Propick from './Propick';
import Results from './Results';
import Sportstake8HowTo from './Sportstake8HowTo';
import Sportstake13HowTo from './Sportstake13HowTo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LottoPlus1 from './LottoPlus1';
import LottoPlus2 from './LottoPlus2';
import PowerballPlus1 from './PowerballPlus1';
import PowerballResults from './PowerballResults';
import DailyLottoHistory from './DailyLottoHistory';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lotto />} />
          <Route path="/lottoHowTo" element={<LottoHowTo />} />
          <Route path="/dailyLotto" element={<DailyLotto />} />
          <Route path="/dailyLottoHisTORY" element={<DailyLottoHistory />} />
          <Route path="/dailyLottoResults" element={<DailyLottoResults />} />
          <Route path="/LottoResults" element={<LottoResults />} />
          <Route path="/LottoPlus1" element={<LottoPlus1 />} />
          <Route path="/PowerballPlus1" element={<PowerballPlus1 />} />
          <Route path="/LottoPlus2" element={<LottoPlus2 />} />
          <Route path="/Powerball" element={<PowerBall />} />
          <Route path="/PowerballResults" element={<PowerballResults />} />
          <Route path="/PowerballHowTo" element={<PowerballHowTo />} />
          <Route path="/Sportstake8" element={<Sportstake8 />} />
          <Route path="/Propick" element={<Propick />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Sportstake8HowTo" element={<Sportstake8HowTo />} />
          <Route path="/Sportstake13HowTo" element={<Sportstake13HowTo />} />
          <Route path="/Sportstake13" element={<Sportstake13 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
