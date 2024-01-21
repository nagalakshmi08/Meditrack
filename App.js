import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Frame from "react-frame-component";
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import './App.css';
function App() {
  return (
    <div>
    <Header/>
    
    <main>
      <Outlet/>
    </main>

    </div>
  );
}

export default App;
