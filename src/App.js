// import logo from './logo.svg';
import './App.css';
import ParticlesBackground from './component/particlebackground';
import { gsap } from 'gsap';
import SideBar from './SideBar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import UserConfirm from './UseConfirm';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
let isClick = false;

const ClickTitle = () => {
  let particleELE = document.getElementById('tsparticles');
  let appELE = document.getElementById('App');
  let sideBtnELE = document.getElementById('sideBtn');
  let confirmArea = document.getElementById('confirmArea');
  gsap.to(".App-header",{duration: 1,xPercent: isClick ? 0 : -44, yPercent:isClick? 0 : -25, onUpdate:function(){
    gsap.to(".menu_title",{duration: 0.7,scaleX : isClick ? 1 : 0.4,scaleY : isClick ? 1 : 0.4,});
    if(isClick) {
      // confirmArea.style.visibility = 'visible';
      sideBtnELE.style.visibility = 'hidden';
      sideBtnELE.classList.remove('fold');
    } else {
      confirmArea.style.visibility = 'hidden';     
    }
  }, onComplete:function(){
    particleELE.style.visibility = isClick ? 'visible' : 'hidden';
    if(isClick) {
      confirmArea.style.visibility = 'visible';
      sideBtnELE.classList.remove('fold');
      sideBtnELE.style.visibility = 'hidden';
      appELE.style.backgroundColor = 'transparent';
    } else {
      sideBtnELE.classList.add('fold');
      confirmArea.style.visibility = 'hidden';
      sideBtnELE.style.visibility = 'visible';
      appELE.style.backgroundColor = 'rgba(0,0,0,1)'
    }
    isClick = !isClick;
  }
});
  
};
function App() {
  return (
    <div className="App" id='App'>

      <header className="App-header">
        <div className='menu_title' onClick={ClickTitle}>Nite's Profile</div>
        <UserConfirm />        

      </header>
      <div className='sideBtn' id='sideBtn' style={{visibility:'hidden'}}>
        <SideBar />
      </div>
      <ParticlesBackground id='tsparticles'/>
    </div>
  );
}

export default App;
