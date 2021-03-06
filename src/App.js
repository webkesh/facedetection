import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const particleOptions ={
  particles:{
    number:{
      value: 5000,
      density:{
        enable: true,
        value_area: 100
      }
    }
  }
}
  


class App extends Component {
  render() {
  return (
    <div className="App">
         <Particles className='particles'
                params={{particleOptions}} />
       <Navigation />
       <Logo />
       <Rank />
      <ImageLinkForm />
       {/*<FaceRecognition />*/}
    </div>
  );
}
}


export default App;
