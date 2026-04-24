import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
import ProjectType from "./components/ProjectType";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project" element={<Projects />}>
          <Route path=":project_type" element={<ProjectType />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
