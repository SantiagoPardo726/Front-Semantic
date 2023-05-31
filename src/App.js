import './App.css';
import Home from './pages/Home';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Form2 from './components/form';
import PrincipalFilter from './components/PrincipalFilter';

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
     <Router>
      <Routes>
      <Route path="/ddd" element={<PrincipalFilter />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<Form2 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
