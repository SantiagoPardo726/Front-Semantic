import React from 'react';
import '../styles/popularCategories.css';
import CategoryCourse from './CategoryCourses';

const PopularCategories = (props) => {
    return (
        <div class="seccionCategory">
            <div class="columnCategory">
            {props.categories["categories"].slice(0, 5).map((course, index) => {
          return (
            <CategoryCourse info = {props.categories["categories"][index]}/>
          );
        })}
            </div>
            <div class="columnCategory">
            {props.categories["categories"].slice(5,10).map((course, index) => {
          return (
            <CategoryCourse info = {props.categories["categories"][index+5]}/>
          );
        })}
            </div>
        </div>
    );
}

export default PopularCategories;