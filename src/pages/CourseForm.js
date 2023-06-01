import React from "react";
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";

const CourseForm = () => {
  function makePostRequest(data) {
    fetch("https://api.example.com/posts", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  const initialValues = {
    courseName: "",
    category: "",
    courseLink: "",
    modules: [{ moduleTitle: "", moduleDescription: "" }],
  };

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("El nombre del curso es requerido"),
    category: Yup.string().required("La categoria es requerida"),
    courseLink: Yup.string()
      .url("El enlace del curso no es válido")
      .required("El enlace del curso es requerido"),
    modules: Yup.array().of(
      Yup.object().shape({
        moduleTitle: Yup.string().required("El título del módulo es requerido"),
        moduleDescription: Yup.string().required(
          "La descripción del módulo es requerida"
        ),
      })
    ),
  });

  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario
    console.log(values);

    // Recuperar los valores de los campos de texto
    const courseName = values.courseName;
    const category = values.lesson;
    const courseLink = values.courseLink;

    console.log("Nombre del curso:", courseName);
    console.log("Categoria:", category);
    console.log("Enlace del curso:", courseLink);

    // Recuperar los valores de los módulos
    const modules = values.modules;
    console.log("Módulos:");
    modules.forEach((module, index) => {
      console.log(`Módulo ${index + 1}:`);
      console.log("Título:", module.moduleTitle);
      console.log("Descripción:", module.moduleDescription);
    });
    const dataToPost = {
      "courseName": courseName,
    };
    makePostRequest(dataToPost);
  };

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="formulario">
          <div>
            <label>Nombre del curso:</label>
            <Field name="courseName" />
            <ErrorMessage name="courseName" component="div" className="error" />
          </div>
          <div>
            <label>Categoria:</label>
            <Field name="category" />
            <ErrorMessage name="category" component="div" className="error" />
          </div>
          <div>
            <label>Enlace del curso:</label>
            <Field name="courseLink" />
            <ErrorMessage name="courseLink" component="div" className="error" />
          </div>
          <FieldArray name="modules">
            {({ push, remove }) => (
              <div>
                {values.modules.map((module, index) => (
                  <div key={index}>
                    <div>
                      <label>Nombre de la leccion:</label>
                      <Field name={`modules.${index}.moduleTitle`} />
                      <ErrorMessage
                        name={`modules.${index}.moduleTitle`}
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <label>link de la leccion:</label>
                      <Field name={`modules.${index}.moduleDescription`} />
                      <ErrorMessage
                        name={`modules.${index}.moduleDescription`}
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="add-lesson"
                      onClick={() =>
                        push({ moduleTitle: "", moduleDescription: "" })
                      }
                    >
                      Agregar módulo
                    </button>
                    <button type="del-lesson" onClick={() => remove(index)}>
                      Eliminar módulo
                    </button>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
    </>
  );
};

export default CourseForm;
