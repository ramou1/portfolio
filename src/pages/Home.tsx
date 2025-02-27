// src/pages/Home.tsx
import React, { useState } from "react";
import "../styles/App.css";
import { projects } from "../data";
import Card from "../components/Card";
import Modal from "../components/Modal";

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="app">
      <h1>Meu Portfólio</h1>
      {/* <div className="grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            title={project.title}
            onClick={() => setSelectedProject(project.id)}
          />
        ))}
      </div>

      {selectedProject !== null && (
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projects[selectedProject - 1].title}
          description={projects[selectedProject - 1].description}
          link={projects[selectedProject - 1].link}
        />
      )} */}
    </div>
  );
};

export default Home;
