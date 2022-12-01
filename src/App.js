import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails';
import Homepage from './components/Homepage';
import News from './components/News';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:uuid" element={<Cryptodetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
