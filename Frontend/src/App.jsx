import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./Pages/Start_window";
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Answer from './Pages/Answer';
import { UserContext } from './Pages/Home';
import { useState } from 'react';

function App() {
  const [subjectId, setSubjectId] = useState("");
  
  return (
   <>
  <UserContext.Provider value={subjectId}>
   <Router>
    <Routes>
      <Route path='/' element={<Home value={subjectId} setValue={setSubjectId}/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/Questions' element={<Questions/>}></Route>
      <Route path='/answer' element={<Answer/>}></Route>
    </Routes>
   </Router>
   </UserContext.Provider>
   </>
  );
}
export default App;
