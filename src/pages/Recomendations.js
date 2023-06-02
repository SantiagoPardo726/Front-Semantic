import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import MovingCardList from '../components/MovingCardList';
import { AuthContext } from '../components/AuthContext';
import Title from '../components/Title';
import PrincipalFilter from '../components/PrincipalFilter';
import { Padding } from '@mui/icons-material';
import '../styles/recomendation.css'
import Footer from '../components/Footer';


const Recomendations = (props) => {
    const [currentData, setCurrentData] = useState({"courses":[]});
    const [currentData2, setCurrentData2] = useState({"courses":[]});
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
          setCurrentData2(json);
        })
        .catch((error) => console.error(error));
    };
    const context = useContext(AuthContext);
    const estilo = {
      padding: "40px",
    };
  
    const username = context.user;
    console.log("user");
    console.log(username);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/courses_by_language/"+username);
        fetchData2("http://127.0.0.1:8000/courses_partners/"+username);
      }, []);
    return (
        <>
          <Header></Header>  
          <Title title = {'Cursos en tus lenguages favoritos'} subtitle = {'Estos son que están el los lenguajes en los cuales has visto algún curso'}/>
          <MovingCardList courses = {currentData}></MovingCardList>
            <PrincipalFilter/>
          <Title title = {'Cursos de tu parecidos'} subtitle = {'Estos son los cursos que otros usuarios como tu han visto'}/>
          <MovingCardList courses = {currentData2}></MovingCardList>
          <Footer />
        </>
    );
}

export default Recomendations;