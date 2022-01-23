import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Carousel showArrows={true}>
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={image3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={image4} />
          <p className="legend">Legend 4</p>
        </div>
        {/*<div>*/}
        {/*  <img src="assets/5.jpeg" />*/}
        {/*  <p className="legend">Legend 5</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="assets/6.jpeg" />*/}
        {/*  <p className="legend">Legend 6</p>*/}
        {/*</div>*/}
      </Carousel>
    </div>
  );
}

export default App;

