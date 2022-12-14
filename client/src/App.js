
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Contactus from './pages/contactus';
import Registration from './pages/Registration';
import RegSuc from './pages/Registration_success';
import RegFail from './pages/Registration_fail';
import NotFound from './pages/notFound';
import AllSpeakers from './pages/allspeaker';
import Sponsors from './pages/sponsors';
function App() {
  return (
    <body  >
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/registration' element={<Registration/>}/>
      <Route exact path='/registration/success' element={<RegSuc/>}/>
      <Route exact path='/registration/failure' element={<RegFail/>}/>
      <Route exact path="/contactus" element={<Contactus />} />
      <Route exact path="/speakers" element={<AllSpeakers />} />
      <Route exact path="/sponsors" element={<Sponsors />} />
      <Route exact path="*" element={<NotFound/>} />
    </Routes>

    </Router>
    
    </body>
  );
}

export default App;
