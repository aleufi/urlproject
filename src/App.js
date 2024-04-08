import Home from './components/Home';
import Success from './components/Success'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>

  );
}

export default App;
