import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import AboutPage from "@/pages/about";
import ProjectsPage from "./pages/projects";
import Contacts from "./pages/contacts";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<Contacts />} path="/contacts" />
    </Routes>
  );
}

export default App;
