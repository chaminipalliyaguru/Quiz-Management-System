import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./Pages/Start_window";
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import { UserContext } from './Pages/Home';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  
  return (
   <>
  <UserContext.Provider value={value}>
   <Router>
    <Routes>
      <Route path='/' element={<Home value={value} setValue={setValue}/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/Questions' element={<Questions/>}></Route>
    </Routes>
   </Router>
   </UserContext.Provider>
   </>
  );
}
export default App;
