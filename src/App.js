import logo from './logo.svg';
import profileImg from './profile.jpg'
import './App.css';
import Greet from './components/Greet'
import ProfileImage from './components/ProfileImage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfileImage/>
      <Greet/>
      </header>
    </div>
    
  );
}

export default App;
