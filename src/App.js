import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileImage from './components/ProfileImage';
import TopNavBar from './components/TopNavBar';
import Carousel2 from './components/Carousel2';

function App() {
  return (
    <>
    <div className="container-fluid">
      <TopNavBar/>
      <div className="d-flex justify-content-center m-5">
          <ProfileImage/>
      </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 m-5">
          <Carousel2/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;