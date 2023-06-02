import React, { useContext, useEffect } from 'react';
import '../styles/home.css';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MovingCardList from '../components/MovingCardList';
import Title from '../components/Title';
import Footer from '../components/Footer';
import PopularCategories from '../components/PopularCategories';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [currentData, setCurrentData] = useState({"courses":[]});
    const [currentCategories, setCurrentCategories] = useState({"categories":[]});
    const fetchData = (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setCurrentData(json);
          })
          .catch((error) => console.error(error));
      };
    const fetchData2 = (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setCurrentCategories(json);
          })
          .catch((error) => console.error(error));
      };
    const context = useContext(AuthContext);

    const username = context.user;
    console.log("user");
    console.log(username);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/get-top-10-courses");
        fetchData2("http://127.0.0.1:8000/favorite-category/"+username);
      }, []);
    //  console.log(currentData)
    return (
        <>
            <Header />
            <Banner />
            <Title title = {'Cursos del Momento'} subtitle = {'Estos son los top 10 cursos más vistos'}/>
            <MovingCardList courses = {currentData}/>
            <Title title = {'Cursos del Momento'} subtitle = {'Estos son los top 10 cursos más vistos'}/>
            <div className="homePopularCaegories">
            <PopularCategories categories = {currentCategories}/>
            </div>
            <Footer />
        </>
    );
}

export default Home;