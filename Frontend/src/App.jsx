import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./Pages/Start_window";
import Home from './Pages/Home';

function App() {
  
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
    </Routes>
   </Router>
   </>
  );
}
export default App;
