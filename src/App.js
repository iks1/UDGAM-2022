
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Schedule from './pages/schedule';

import Contactus from './pages/contactus';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route exact path="/contactus" element={<Contactus />} />
        </Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
