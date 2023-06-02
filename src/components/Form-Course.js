import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";

import "../styles/formCourse.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
const CourseForm = () => {
  const initialValues = {
    courseName: "",
    category: "",
    courseLink: "",
    modules: [{ moduleTitle: "", moduleDescription: "" }],
  };
  function makePostRequest(data) {
    fetch("https://api.example.com/posts", {
      method: "POST",
      headers: {
        "Content-uri": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Request successful
          console.log("Post created successfully");
        } else {
          // Request failed
          console.error("Error creating post");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("El nombre del curso es requerido"),
    category: Yup.string().required("La categoria es requerida"),
    courseLink: Yup.string().required("El enlace del curso es requerido"),
    modules: Yup.array().of(
      Yup.object().shape({
        moduleTitle: Yup.string().required("El título del módulo es requerido"),
        moduleDescription: Yup.string().required(
          "La descripción del módulo es requerida"
        ),
      })
    ),
  });
  const [moreOnelesson, setMoreOnelesson] = useState(1);

  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario
    console.log(values);
    makePostRequest({
      course: {
        basic: {
          name: values.courseLink,
          uri: values.courseLink,
          language: values.language,
        },
        category: { uri: values.category },
        lessons: values.modules,
        keyTerms: [{}],
        image:
          "https://www.disfrutabox.com/upload/images/brands/chimbo-grande.jpg",
      },
    });
    console.log({
      course: {
        basic: {
          name: values.courseLink,
          uri: values.courseLink,
          language: values.language,
        },
        category: { uri: values.category },
        lessons: values.modules,
        keyTerms: [{}],
        image:
          "https://www.disfrutabox.com/upload/images/brands/chimbo-grande.jpg",
      },
    });
  };

  const [options, setOptions] = useState([
    { name: "The Shawshank Redemption", uri: 1994 },
    { name: "The Godfather", uri: 1972 },
    { name: "The Godfather: Part II", uri: 1974 },
    { name: "The Dark Knight", uri: 2008 },
    { name: "12 Angry Men", uri: 1957 },
    { name: "Schindler's List", uri: 1993 },
    { name: "Pulp Fiction", uri: 1994 },
  ]);

  useEffect(() => {
    // Fetch options from JSON endpoint
    axios
      .get("/api/options")
      .then((response) => {
        setOptions(response.data.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="dashboard-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="formulario">
            <div className="header-form">Crear Curso</div>

            <div>
              <label>Nombre del curso:</label>
              <Field
                name="courseName"
                placeholder="Ej: Semantic Web"
                className="custom-field"
              />
              <ErrorMessage
                name="courseName"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label>Categoria:</label>
              <Field
                name="category"
                as="select"
                className="custom-field"
                placeholder="Ej: Maestría"
              >
                {options.map((op) => (
                  <option value={op.uri}>{op.name}</option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <label>Idioma:</label>
              <Field
                name="language"
                as="select"
                className="custom-field"
                placeholder="Ej: Espanish"
              >
                <option value="Español">Español</option>
                <option value="English">English</option>
                <option value="Portugues">Portugues</option>
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <label>Enlace del curso:</label>
              <Field
                name="courseLink"
                className="custom-field"
                placeholder="Ej: http://localhost:3000/course"
              />
              <ErrorMessage
                name="courseLink"
                component="div"
                className="error"
              />
            </div>
            <FieldArray name="modules">
              {({ push, remove }) => (
                <div>
                  {values.modules.map((module, index) => (
                    <div key={index}>
                      <div>
                        <label>Nombre de la leccion:</label>
                        <Field
                          name={`modules.${index}.moduleTitle`}
                          className="custom-field"
                          placeholder={"Ej: RDF: " + index}
                        />
                        <ErrorMessage
                          name={`modules.${index}.moduleTitle`}
                          component="div"
                          className="error"
                        />
                      </div>
                      <div>
                        <label>link de la leccion:</label>
                        <Field
                          name={`modules.${index}.moduleDescription`}
                          className="custom-field"
                          placeholder={
                            "Ej: http://localhost:3000/course/lesson/" + index
                          }
                        />
                        <ErrorMessage
                          name={`modules.${index}.moduleDescription`}
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="btn-container">
                        <button
                          type="add-lesson"
                          onClick={() => {
                            push({ moduleTitle: "", moduleDescription: "" });
                            setMoreOnelesson(moreOnelesson + 1);
                          }}
                        >
                          Agregar módulo
                        </button>
                        <div className="width-space"></div>
                        {moreOnelesson > 1 && (
                          <button
                            type="del-lesson"
                            onClick={() => {
                              remove(index);
                              setMoreOnelesson(moreOnelesson - 1);
                            }}
                          >
                            Eliminar módulo
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseForm;
