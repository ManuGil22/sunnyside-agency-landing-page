import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImg from './images/desktop/image-header.jpg';
import arrowIcon from './images/icon-arrow-down.svg';

// Components
import Header from './Components/Header';
import TextCard from './Components/TextCard';

function App() {
  return (
    <div className="main">
      <Header />
      <img className="main-img" src={mainImg}></img>
      <div className="heading-container">
        <h1 className='main-title'>WE ARE CREATIVES</h1>
        <img className='arrow-img' src={arrowIcon}></img>
      </div>
      <div className='grid-container'>
        <TextCard 
          title="Transform your brand" 
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." 
          color="yellow" />
        <TextCard 
          title="Stand out to the right audience" 
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." 
          color="red" />
      </div>
    </div>
  );
}

export default App;
