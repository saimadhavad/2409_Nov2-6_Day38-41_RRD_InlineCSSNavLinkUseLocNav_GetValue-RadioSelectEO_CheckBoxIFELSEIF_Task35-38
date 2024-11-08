import './App.css';
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import Leaves from './components/Leaves';
import PageNotFound from './components/PageNotFound';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
import  {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/dashboard'element={<Dashboard/>}></Route>
            <Route path='/editProfile' element={<EditProfile/>}></Route>
            <Route path='/leaves' element={<Leaves/>}></Route>
            <Route path='/tasks' element={<Tasks/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>

          </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Signup></Signup>
    //   <Signin></Signin>
    //   <Dashboard></Dashboard>
    //   <Tasks></Tasks>
    //   <Leaves></Leaves>
    //   <EditProfile></EditProfile>
    // </div>
  );
}

export default App;
