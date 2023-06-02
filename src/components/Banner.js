import React from 'react';
import '../styles/banner.css';

const Banner = () => {
    const urlIamge = "https://firebasestorage.googleapis.com/v0/b/moviles2023-c0911.appspot.com/o/images%2FlogoSW.png?alt=media&token=28386e87-abd8-4fca-bccb-f41a2e732dc6&_gl=1*4f0mc3*_ga*NTI4Mjc5OTcyLjE2Nzk3MDEzMjM.*_ga_CW55HF8NVT*MTY4NTY5MDE3OC4xNS4xLjE2ODU2OTAyNDcuMC4wLjA."
    return (
        <div class="banner">
            <div class="columna1">
                <img src= {urlIamge} alt="Imagen" />
            </div>
            <div class="columna2">
                <h1>CourseQuest: Explora y descubre cursos en línea recomendados</h1>
                <p>CourseQuest es una plataforma de recomendación de cursos en línea que utiliza tecnologías de Semántica Web para brindarte una experiencia de descubrimiento única. Nuestro sistema inteligente analiza tus intereses, experiencia previa y objetivos educativos para ofrecerte una selección personalizada de cursos relevantes. Explora una amplia gama de temas y descubre cursos de alta calidad de diferentes plataformas educativas. </p>
            </div>
        </div>
    );
}

export default Banner;