import './App.css';
import { Routes, Route} from 'react-router-dom';

// 페이지 라우팅
import Main from './pages/Main';
import Chal from './pages/Chal';
import Prac from './pages/Prac';

import PT1 from './pages/Prac/PT1';
import PT2 from './pages/Prac/PT2';
import PC1 from './pages/Prac/PC1';

import CC1 from './pages/Chal/CC1';
import CT1 from './pages/Chal/CT1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'${process.env.PUBLIC_URL}/'} element={<Main />} />
        
        <Route path='/prac' element={<Prac />} />

        <Route path='/prac/train1' element={<PT1 />} />
        <Route path='/prac/train2' element={<PT2 />} /> 
        <Route path='/prac/cafe1' element={<PC1 />} /> 

        <Route path='/chal' element={<Chal />} />
        <Route path='/chal/train1' element={<CT1 />} />
        <Route path='/chal/cafe1' element={<CC1 />} />
        
      </Routes>
    </div>
  );
}

export default App;
