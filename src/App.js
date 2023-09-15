import './App.css';
import Professor from './components/Professor';
import Students from './components/Students';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/students' element={<Students/>}/>
        <Route path='/professor' element={<Professor/>}/>

      </Routes>
      
      </BrowserRouter>
      {/* <Professor style={{border:"1px solid pink" }}/>
      <Students style={{border:"1px solid pink"}}/> */}

    </div>
  );
}

export default App;
