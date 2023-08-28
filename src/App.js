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
  gsap.to(".menu_title",{duration: 1,x: isClick ? 0 : -790, y:isClick? 0 : -420, onUpdate:function(){
    // document.getElementsByClassName('menu_title')[0].style.fontSize = '50px';
    gsap.to(".menu_title",{duration: 1,scaleX : isClick ? 1 : 0.5,scaleY : isClick ? 1 : 0.5,});
  },onComplete:function(){
    isClick = !isClick;
  }
});
  
};
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='menu_title' onClick={ClickTitle}>Nite's Resume</div>
        <ParticlesBackground />
      </header>
      
    </div>
  );
}

export default App;
