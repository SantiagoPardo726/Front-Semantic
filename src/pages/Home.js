import React from 'react';
import '../styles/banner.css';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MovingCardList from '../components/MovingCardList';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Title />
            <MovingCardList />
            <Title />
            <MovingCardList />
            <Footer />
        </>
    );
}

export default Home;