import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Comonent/Navbar';
import Signinclick from './Signinclick';
import Registration from './Comonent/Registration';
import Login from './Comonent/Login';


function App() {
  return (
   <>
<Routes>
  <Route exact path='/' element={<Navbar/>}/>
  <Route exact path='signinclick' element={<Signinclick/>}/>
  <Route exact path='signup' element={<Registration/>}/>
  <Route exact path='signin' element={<Login/>}/>
</Routes>
   </>
  );
}

export default App;
