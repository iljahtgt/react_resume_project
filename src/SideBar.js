import './SideBar.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Intro from './Intro.js';
import Work from './Work';
import Project from './Project';
import Education from './Education';
import Contacts from './Contacts';
function SideBar() {
  return (
    <div className="SideBar in-down">
        <Router>
          <ButtonGroup vertical id='ButtonGroup'>
            <Button variant="" size="lg"><Link to="/intro" style={{textDecoration: 'none'}}>Intro</Link></Button>
            <Button variant="" size="lg"><Link to="/work" style={{textDecoration: 'none'}}>Work</Link></Button>
            <Button variant="" size="lg"><Link to="/education" style={{textDecoration: 'none'}}>Education</Link></Button>
            <Button variant="" size="lg"><Link to="/project" style={{textDecoration: 'none'}}>Project</Link></Button>
            <Button variant="" size="lg"><Link to="/contacts" style={{textDecoration: 'none'}}>Contacts</Link></Button>
          </ButtonGroup>
        
            <Routes>
                <Route path="/intro" element={<Intro />}/>
                <Route path="/work" element={<Work />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/project" element={<Project />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default SideBar;
