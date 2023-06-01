import { useState } from 'react';
import {KeytermsFilter} from './KeytermsFilter'
import {CourseFilter} from './CourseFilter'
import React from 'react';
import '../styles/footer.css';
import data from '../data/data';
import Title from './Title';

const PrincipalFilter = () => {

    const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
            if (category== 'All'){
                setArticles(data)
                return
            }

            const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)

    }

    return (


        
        <>
    <Title title = {'Cursos Recomendados por KeyTerm'} subtitle = {'Estos son los  cursos Recomendados de Acuerdo a los que has tomado'}/>
        
        
        
        <CourseFilter articles={articles} >
         </CourseFilter>
         
         
         </>
       )
}

export default PrincipalFilter