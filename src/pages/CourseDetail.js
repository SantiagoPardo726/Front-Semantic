import React from "react";
import { useParams } from "react-router-dom/dist";
import Header from "../components/Header";
import ChipList from "../components/ChipList";
import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

import "../styles/courseDetail.css";
const courseQuemado = {
  basic: {
    name: "Economía Circular",
    uri: "http://www.uniandes.web.semantica.example.org/45636f6e6f6dc3ad612043697263756c6172",
    language: "Español",
    description:
      "¿Cómo puedo diseñar mi negocio para contribuir a una economía circular?\nConozca los fundamentos y los principios básicos de la economía circular y comprenda cómo puede proporcionar más beneficios y valor que un modelo de negocio lineal tradicional.\n\nEn este curso, usted:\n\nComprenderá por qué la economía circular es muy importante en el mundo actual.\nAprenderá los principios básicos de la economía circular.\nEntenderá las diferentes formas en las que puede incorporar la economía circular a su modelo de negocio.\n\nEste curso se desarrolló gracias a la colaboración entre UNIDO y HP LIFE, con el apoyo financiero de USAID y la HP Foundation.",
    link: "https://www.life-global.org/es/es/course/336-econom%C3%ADa-circular",
  },
  category: {
    name: "Puesta en marcha / Innovar",
    link: "None",
    uri: "http://www.uniandes.web.semantica.example.org/50756573746120656e206d6172636861202f20496e6e6f766172",
  },
  lessons: [
    {
      name: "Historia",
      content: "Type: Introducción",
      uri: "http://www.uniandes.web.semantica.example.org/486973746f72696145636f6e6f6dc3ad612043697263756c6172",
    },
    {
      name: "Concepto empresarial",
      content: "Type: Difenrente",
      uri: "http://www.uniandes.web.semantica.example.org/436f6e636570746f20656d70726573617269616c45636f6e6f6dc3ad612043697263756c6172",
    },
    {
      name: "Habilidades tecnológicas",
      content: "Type: Módulos",
      uri: "http://www.uniandes.web.semantica.example.org/486162696c696461646573207465636e6f6cc3b3676963617345636f6e6f6dc3ad612043697263756c6172",
    },
    {
      name: " Encuesta",
      content: "Type: Módulos",
      uri: "http://www.uniandes.web.semantica.example.org/20456e63756573746145636f6e6f6dc3ad612043697263756c6172",
    },
    {
      name: "Recursos",
      content: "Type: Módulos",
      uri: "http://www.uniandes.web.semantica.example.org/5265637572736f7345636f6e6f6dc3ad612043697263756c6172",
    },
  ],
  keyTerms: [
    {
      term: "HP",
      link: [
        "http://fr.dbpedia.org/resource/Hewlett-Packard",
        "http://dbpedia.org/resource/Hewlett-Packard",
        "http://pt.dbpedia.org/resource/Hewlett-Packard",
        "http://es.dbpedia.org/resource/Hewlett-Packard",
      ],
      uri: "http://www.uniandes.web.semantica.example.org/4850",
    },
    {
      term: "LIFE",
      link: [
        "http://fr.dbpedia.org/resource/L'instrument_financier_pour_l'environnement",
        "http://fr.dbpedia.org/resource/Life",
        "http://dbpedia.org/resource/Conway's_Game_of_Life",
        "http://pt.dbpedia.org/resource/Life_(revista)",
        "http://es.dbpedia.org/resource/Programa_LIFE",
      ],
      uri: "http://www.uniandes.web.semantica.example.org/4c494645",
    },
    {
      term: "USAID",
      link: [
        "http://fr.dbpedia.org/resource/Agence_des_États-Unis_pour_le_développement_international",
        "http://dbpedia.org/resource/United_States_Agency_for_International_Development",
        "http://pt.dbpedia.org/resource/Agência_dos_Estados_Unidos_para_o_Desenvolvimento_Internacional",
        "http://es.dbpedia.org/resource/Agencia_de_los_Estados_Unidos_para_el_Desarrollo_Internacional",
      ],
      uri: "http://www.uniandes.web.semantica.example.org/5553414944",
    },
    {
      term: "economía circular",
      link: ["http://es.dbpedia.org/resource/Economía_circular"],
      uri: "http://www.uniandes.web.semantica.example.org/65636f6e6f6dc3ad612063697263756c6172",
    },
    {
      term: "modelo de negocio",
      link: ["http://es.dbpedia.org/resource/Modelo_de_negocio"],
      uri: "http://www.uniandes.web.semantica.example.org/6d6f64656c6f206465206e65676f63696f",
    },
    {
      term: "lineal",
      link: ["http://es.dbpedia.org/resource/Lineal"],
      uri: "http://www.uniandes.web.semantica.example.org/6c696e65616c",
    },
    {
      term: "UNIDO",
      link: [
        "http://es.dbpedia.org/resource/Organización_de_las_Naciones_Unidas_para_el_Desarrollo_Industrial",
      ],
      uri: "http://www.uniandes.web.semantica.example.org/554e49444f",
    },
  ],
  image: "https://www.disfrutabox.com/upload/images/brands/chimbo-grande.jpg",
};
export default function CourseDetail() {
  const params = useParams();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCourse(json);
      })
      .catch((error) => console.error(error));
  };
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(courseQuemado);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [body, setBody] = useState("");
  const courseId = params.courseId;
  function toCamelCase(str) {
    return str
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^(.)/, (match, char) => char.toUpperCase());
  }
  useEffect(() => {
    fetchData("http://127.0.0.1:8000/detailcouse/");
  }, []);
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="flex-row">
          <div className="flex-col">
            <div className="header-CD">Courso: {course.basic.name}</div>
            <div className="flex-row">
              <div className="sub-heder-CD">Categoria: </div>
              <div> {course.category.name}</div>
            </div>
            <div className="image-container">
              <img className="image-CD" src={course.image} alt="Course " />
            </div>

            <div className="flex-col">
              <div className="flex-row">
                <div className="flex-col-3of4">
                  <div style={{ marginTop: "25px" }}>
                    <div className="info-dashboard">
                      <div className="sub-header-basic">Descripción</div>
                      <div className="description-body">
                        {course.basic.description}
                      </div>
                      <div className="divider"></div>
                      <div className="sub-header-basic">Terminos:</div>

                      <ChipList list={course.keyTerms} />
                    </div>
                  </div>
                </div>
                <div className="flex-col-1of4">
                  <div className="flex-col-80">
                    <div className="sub-header-basic">Lecciones</div>
                    <div className="summary">
                      {course.lessons.map((lesson) => (
                        <div
                          className="term"
                          onClick={() => {
                            handleOpen();
                            setBody(lesson.content);
                          }}
                        >
                          {toCamelCase(lesson.name)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Contenido de la lección
            </Typography>
            <Typography>{body}</Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
