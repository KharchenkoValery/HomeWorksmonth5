import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './pages/mainPage/MainPage.jsx';
import UserRegisterPage from './pages/usersRegisterPage/UsersRegisterPage.jsx';
import PasswordPage from './pages/passwordPage/PasswordPage.jsx';
// import Menu from './components/Menu.js';



function App() {
  return (
    <BrowserRouter>
    {/* <Menu> */}
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path='/users' element={<UserRegisterPage />}/>
      <Route path='/password' element={<PasswordPage/>}/>
      
    </Routes>
    {/* <Menu/> */}
</BrowserRouter>
  );
}

export default App;
