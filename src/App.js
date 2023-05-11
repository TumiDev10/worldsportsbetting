import './App.css';
import Lotto from './Lotto';
import LottoHowTo from './lottoHowTo';
import DailyLotto from './dailyLotto'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lotto />} />
          <Route path="/lottoHowTo" element={<LottoHowTo />} />
          <Route path="/dailyLotto" element={<DailyLotto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
