import React from "react";
import "../styles/categoryCourse.css"


const CategoryCourse = (props) => {
    return (
        <div className="_1gjyeas">
            <button className="_1gbamhn" aria-expanded="true">
                <img
                    src={props["info"].urlImage}
                    width="45"
                    height="45"
                    className="_1yvsftr"
                    alt=""
                ></img>
                {props["info"].name}
                <svg
                    aria-hidden="true"
                    className="_yhukwjp"
                    focusable="false"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                ></svg>
            </button>
            <div className="columns">
                <ul className="_u3ctvv">
                    {props["info"].courses.slice(0,5).map((course, index) => {
                        return (
                            <li className="_3hmsj">
                        <a
                            href="/math/cc-fifth-grade-math"
                            className="_pt9he7"
                            aria-activedescendant="course-title-0010"
                        >
                            <span class="course-title">{course.name}</span>
                        </a>
                    </li>
                        );
                    })}
                </ul>
                <ul className="_rm7tne8">
                {props["info"].courses.slice(5,9).map((course, index) => {
                    console.log(course);
                        return (
                            <li className="_3hmsj">
                        <a
                            href="/math/cc-fifth-grade-math"
                            className="_pt9he7"
                            aria-activedescendant="course-title-0010"
                        >
                            <span class="course-title">{course.name}</span>
                        </a>
                    </li>
                        );
                    })}
                    <li className="_1vrfoknn">
                        <a
                            href="/math/k-8-grades"
                            className="_pt9he7"
                            aria-activedescendant="course-title-0014"
                        >
                            <span class="course-title">Busca más</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default CategoryCourse;
