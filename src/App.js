import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
      <>
        <Header />
        <div className="app_body">
          <Sidebar/>
          <Feed/>
        </div>
      </>
      )}
 
    </div>
  );
}

export default App;
