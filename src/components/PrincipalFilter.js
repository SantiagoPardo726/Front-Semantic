import { useContext, useEffect, useState } from 'react';
import {KeytermsFilter} from './KeytermsFilter'
import {CourseFilter} from './CourseFilter'
import React from 'react';
import '../styles/footer.css';
import data from '../data/data';
import Title from './Title';
import { AuthContext } from './AuthContext';

const PrincipalFilter = () => {

	const [courses, setCourses] = useState({"courses":[]});
	const [articles, setArticles] = useState(data);
    const context = useContext(AuthContext);

    const username = context.user;
    const fetchData = (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setCourses(json);
          })
          .catch((error) => console.error(error));
      };
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/courses_by_related_term/"+username);
      }, []);



    return (


        
        <>
    <Title title = {'Cursos Recomendados por KeyTerm'} subtitle = {'Estos son los  cursos Recomendados de Acuerdo a los que has tomado'}/>
        
        
        
        <CourseFilter articles={courses} >
         </CourseFilter>
         
         
         </>
       )
}

export default PrincipalFilter