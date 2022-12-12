
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import ListUser from './components/ListUser';
import DetailUser from './components/DetailUser';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Acceuil/>} >
            <Route index element={<ListUser/>}/>
            <Route path='userDetails/:id' element={<DetailUser/>}/>
            <Route path='userTaches/:id' element={<ListTodo />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
