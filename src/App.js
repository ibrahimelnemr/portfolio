import logo from './logo.svg';
import profileImg from './profile.jpg'
import './App.css';
import Greet from './components/Greet'
import DemoCarousel from './components/DemoCarousel';
import ProfileImage from './components/ProfileImage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfileImage/>
      <Greet/>
      
      <DemoCarousel infiniteLoop={'True'}/>
      </header>
    </div>
    
  );
}

export default App;
