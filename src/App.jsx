import {Route, Routes} from 'react-router-dom'
import './App.css';
import Alldata from './Components/Alldata';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Moredetails from './Components/Moredetails';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>


      <header>
        <Header/>
      </header>

      <section>

     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/data' element={<Alldata/>}/>
        <Route path='data/view/:id' element={<Moredetails/>}/>
     </Routes>

      </section>


      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
