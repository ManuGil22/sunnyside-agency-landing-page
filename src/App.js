import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import mainImg from './images/desktop/image-header.jpg';
import arrowIcon from './images/icon-arrow-down.svg';

import transformImg from './images/desktop/image-transform.jpg';
import standOutImg from './images/desktop/image-stand-out.jpg';
import graphicDesingImg from './images/desktop/image-graphic-design.jpg';
import photographyImg from './images/desktop/image-photography.jpg';

import emilyAvatar from './images/image-emily.jpg';
import jennieAvatar from './images/image-jennie.jpg';
import thomasAvatar from './images/image-thomas.jpg';

// Components
import Header from './Components/Header';
import TextCard from './Components/TextCard';
import ImageCard from './Components/ImageCard';
import TestimonyCard from './Components/TestimonyCard';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

function App() {
  return (
    <main className="main">
      <Header />
      <img className="main-img" src={mainImg} alt="main background image"></img>
      <div className="heading-container">
        <h1 className='main-title'>WE ARE CREATIVES</h1>
        <img className='arrow-img' src={arrowIcon} alt="arrow icon"></img>
      </div>

      <div className='main-section grid-container'>
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
          className="graphic"
          imgSrc={graphicDesingImg} 
          title="Graphic design" 
          text=" Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          color="green" />
        <ImageCard 
          className="photography"
          imgSrc={photographyImg}
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="blue" />
      </div>

      <div className='clients-section'>
        <h2 className='clients-section-header'>CLIENT TESTIMONIALS</h2>
        <div className='testimonies-container'>
        <TestimonyCard 
            imgSrc={emilyAvatar} 
            testimony="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            clientName="Emily R."
            clientPosition="Marketing Director" />
          <TestimonyCard 
            imgSrc={thomasAvatar} 
            testimony="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            clientName="Thomas S."
            clientPosition="Chief Operating Officer" />
          <TestimonyCard 
            imgSrc={jennieAvatar} 
            testimony="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            clientName="Jennie F."
            clientPosition=" Business Owner" />
        </div>
      </div>

      <Gallery />

      <Footer />
    </main>
  );
}

export default App;
