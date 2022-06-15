import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImg from './images/desktop/image-header.jpg';
import arrowIcon from './images/icon-arrow-down.svg';
import transformImg from './images/desktop/image-transform.jpg';
import standOutImg from './images/desktop/image-stand-out.jpg';
import graphicDesingImg from './images/desktop/image-graphic-design.jpg';
import photographyImg from './images/desktop/image-photography.jpg';

// Components
import Header from './Components/Header';
import TextCard from './Components/TextCard';
import ImageCard from './Components/ImageCard';

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
        <ImageCard imgSrc={transformImg} />
        <ImageCard imgSrc={standOutImg} />
        <TextCard 
          title="Stand out to the right audience" 
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." 
          color="red" />
        <ImageCard 
          imgSrc={graphicDesingImg} 
          title="Graphic design" 
          text=" Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          color="green" />
        <ImageCard 
          imgSrc={photographyImg}
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="blue" />
      </div>
    </div>
  );
}

export default App;
