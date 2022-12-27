import logo from './logo.svg';
import profileImg from './profile.jpg'
import './App.css';
import Greet from './components/Greet'
import ProfileImage from './components/ProfileImage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World!</p>
        <p>Hello World!</p>
      
      <ProfileImage/>
      <Greet/>
      </header>
    </div>
    
  );
}

export default App;
