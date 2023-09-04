// import logo from './logo.svg';
import './userConfirm.css';
import { gsap } from 'gsap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
let btnClick = false;
const ClickTitle = () => {
  let particleELE = document.getElementById('tsparticles');
  let appELE = document.getElementById('App');
  let sideBtnELE = document.getElementById('sideBtn');
  let confirmArea = document.getElementById('confirmArea');
  gsap.to(".App-header",{duration: 1,xPercent: btnClick ? 0 : -44, yPercent:btnClick? 0 : -25, onUpdate:function(){
    gsap.to(".menu_title",{duration: 0.7,scaleX : btnClick ? 1 : 0.4,scaleY : btnClick ? 1 : 0.4,});
    if(btnClick) {
      // confirmArea.style.visibility = 'visible';
      sideBtnELE.style.visibility = 'hidden';
      sideBtnELE.classList.remove('fold');
    } else {
      confirmArea.style.visibility = 'hidden';     
    }
  }, onComplete:function(){
    particleELE.style.visibility = btnClick ? 'visible' : 'hidden';
    if(btnClick) {
      // confirmArea.style.visibility = 'visible';
      sideBtnELE.classList.remove('fold');
      sideBtnELE.style.visibility = 'hidden';
      appELE.style.backgroundColor = 'transparent';
    } else {
      sideBtnELE.classList.add('fold');
      confirmArea.style.visibility = 'hidden';
      sideBtnELE.style.visibility = 'visible';
      appELE.style.backgroundColor = 'rgba(0,0,0,1)'
    }
    btnClick = !btnClick;
  }
});
  
};

function UserConfirm(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseClick = () => {
    let inputValue = document.getElementById('input').value;
    console.log('inputValue:::',inputValue);
    ClickTitle();
  }

  const originStyle = {
    backgroundColor:'#1c1468',
    border:'1px solid #5271ff'
  }

  const hoverStyle = {
    backgroundColor: '#322b72',
    border:'1px solid #5271ff',
    boxShadow:'0 0 7px #fff'
    
  }
  return (
    <div>
        <div className='confirmArea' id='confirmArea'>
          <div className='inputTitle'>歡迎
            <div>請輸入稱呼 : <input id='input' placeholder='承太郎'/>
            </div>
          </div>
          <Button style={isHover ? hoverStyle : originStyle } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseClick}>確認</Button>
        </div>
    </div>
  );
}

export default UserConfirm;
