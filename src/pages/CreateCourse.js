import Footer from "../components/Footer";
import Header from "../components/Header";
import CourseForm from "../components/Form-Course";

export default function CreateCourse() {
  return (
    <>
      <Header></Header>
      <div style={{ marginBottom: "30px" }}>
        <CourseForm />
      </div>
      <Footer></Footer>
    </>
  );
}
