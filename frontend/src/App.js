import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Add } from './pages/Add';
import { Update } from './pages/Update';
import {Books} from './pages/Books'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<book/>}/> */}
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/" element={<book/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
