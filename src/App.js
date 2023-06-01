import './App.css';
import Home from './pages/Home';
import CreateCourse from './components/CreateCourse'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {Row, Col, Form, Input, Label, FormGroup, Button, FormFeedback} from 'reactstrap';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function App() {
  return (
    <>

     <CreateCourse>
     </CreateCourse>

    
    </>
  );
}

export default App;
