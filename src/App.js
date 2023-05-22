import logo from './logo.svg';
import './App.css';
import { CourseCard } from "./components/CourseCard";
import Slider from './components/MovingCardList';
import Navbar from './components/Header';

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
      <Navbar />
      <Slider />
    </>
  );
}

export default App;
