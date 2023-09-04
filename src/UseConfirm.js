// import logo from './logo.svg';
import './userConfirm.css';
import { gsap } from 'gsap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function userComfirm(props) {
  return (
    <div>
        <div className='confirmArea' id='confirmArea'>
          <div className='inputTitle'>歡迎
            <div>請輸入稱呼 : <input />
            </div>
          </div>
          <Button style={{backgroundColor:'#1c1468',border:'none'}}>確認</Button>
        </div>
    </div>
  );
}

export default userComfirm;
