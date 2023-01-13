import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileImage from './components/ProfileImage';
import TopNavBar from './components/TopNavBar';
import Carousel2 from './components/Carousel2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TopNavBar/>
      <Carousel2/>
      <ProfileImage/>
      
      
      </header>
    </div>
    
  );
}

export default App;