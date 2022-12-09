import Events from './pages/Events'
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import PastSpeakers from './pages/PastSpeakers';


function App() {
  return (
    <>
      <Navbar/>
      {/* Home */}
      <Landing/>
       {/*Events */ }
       <Events/>
      {/* Past Speakers*/}
      <PastSpeakers/>
  
      {/* Merch*/}
      {/* Get Ticket*/}
      {/* Footer*/} 

    </>
  );
}

export default App;
