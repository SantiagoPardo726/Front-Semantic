import { useState } from 'react';
import {KeytermsFilter} from './KeytermsFilter'
import {CourseFilter} from './CourseFilter'
import React from 'react';
import '../styles/footer.css';
import data from '../data/data';

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
        <div className='title'>
				<h1>
					Recomendador de <span>Cursos</span> Basados en los Vistos
				</h1>
				<img
					src='https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png'
					alt='imagen-header'
				/>
			</div>
        
        
        
        <KeytermsFilter categories={categories } filterCategory={filterCategory} > 

        </KeytermsFilter>
        <CourseFilter articles={articles} >
         </CourseFilter>
         
         
         </>
       )
}

export default PrincipalFilter