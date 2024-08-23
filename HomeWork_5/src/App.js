
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePostPage from './pages/createPostPage/CreatePostPage.jsx';
import NewPostPage from './pages/newPostPage/NewPostPage.jsx';
import MainPage from './pages/mainPage/MainPage.jsx';
// import Menu from './components/Menu.js';



function App() {
  return (
    <div className='App'>
    {/* <MainPage/> */}
    <NewPostPage/>
    </div>
    
  );
}

export default App;
