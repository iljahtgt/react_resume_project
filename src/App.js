// import logo from './logo.svg';
import './App.css';
import ParticlesBackground from './component/particlebackground';
import { gsap } from 'gsap';
let isClick = false;
// function ClickTitle() {
//   gsap.to(".menu_title",{duration: 2,x: isClick ? 0 : -620, y:isClick? 0 : -420, onUpdate:function(){
//     // document.getElementsByClassName('menu_title')[0].style.fontSize = '50px';
//     gsap.to(".menu_title",{duration: 2,scaleX : isClick ? 1 : 0.5,scaleY : isClick ? 1 : 0.5,});
//   }});
//   isClick = !isClick;
//   console.log('is clikc?',isClick)
// }
const ClickTitle = () => {
  gsap.to(".App-header",{duration: 1,x: isClick ? 0 : -790, y:isClick? 0 : -420, onUpdate:function(){
    // document.getElementsByClassName('menu_title')[0].style.fontSize = '50px';
    gsap.to(".menu_title",{duration: 1,scaleX : isClick ? 1 : 0.5,scaleY : isClick ? 1 : 0.5,});
  },onComplete:function(){
    document.getElementById('tsparticles').style.visibility = isClick ? 'visible' : 'hidden';
    document.getElementById('sideBtn').style.visibility = isClick ? 'hidden' : 'visible';
    
    isClick = !isClick;
  }
  // gsap.to(".menu_title",{duration: 1,x: isClick ? 0 : this.screenX, y:isClick? 0 : -420, onUpdate:function(){
  //   // document.getElementsByClassName('menu_title')[0].style.fontSize = '50px';
  //   gsap.to(".menu_title",{duration: 1,scaleX : isClick ? 1 : 0.5,scaleY : isClick ? 1 : 0.5,});
  // },onComplete:function(){
  //   isClick = !isClick;
  // }
});
  
};
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='menu_title' onClick={ClickTitle}>Nite's Profile</div>
      </header>
      <div className='sideBtn' id='sideBtn'>
        btn
      </div>
      <ParticlesBackground id='tsparticles'/>
      
    </div>
  );
}

export default App;
