import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'
import FirstPageContainer from './components/FirstPage/FirstPageContainer'

function App() {
  return ( 
    <>
      <Navbar />
      <Banner />
      <FirstPageContainer />
    </>
  );
}

export default App;
