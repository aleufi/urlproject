import Home from './components/Home';
import Success from './components/Success';
import Error from './components/Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />}/>
      </Routes>
    </Router>

  );
}

export default App;
