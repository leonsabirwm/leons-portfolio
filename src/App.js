import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectFirst } from './Pages/Projects/ProjectFirst';
import { ProjectSecond } from './Pages/Projects/ProjectSecond';
import { ProjectThird } from './Pages/Projects/ProjectThird';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects/amrap' element={<ProjectFirst></ProjectFirst>}></Route>
        <Route path='/projects/arsenal' element={<ProjectSecond></ProjectSecond>}></Route>
        <Route path='/projects/kungfu' element={<ProjectThird></ProjectThird>}></Route>
      </Routes>
    </div>
  );
}

export default App;
