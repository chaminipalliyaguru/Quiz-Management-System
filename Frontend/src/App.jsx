import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./Pages/Start_window";
import Home from './Pages/Home';
import Questions from './Pages/Questions';

function App() {
  
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/Questions' element={<Questions/>}></Route>
    </Routes>
   </Router>
   </>
  );
}
export default App;
