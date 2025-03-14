import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";
import { projects } from "../../data";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import slide1 from "../../assets/images/slide01.png";
import slide2 from "../../assets/images/slide02.png";
import slide3 from "../../assets/images/slide03.png";

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [slide1, slide2, slide3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="app">
      {/* slider de imagens */}
      <div className="slider-container">
        <div className="slider-content">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${project.slideImage})` }}
              // onClick={() => history.push(project.link)}
            ></div>
          ))}
        </div>

        <div className="slider-dots">
          {slideImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <h1>Meus Projetos</h1>
      {/* seção de projetos em destaque */}
      <section className="projects-section">
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              image={project.projectImage}
              title={project.title}
              category={project.category}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>

        <Link to="/projects" className="view-all-btn">
          Ver todos os projetos
        </Link>
      </section>

      {selectedProject !== null && (
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projects[selectedProject - 1].title}
          description={projects[selectedProject - 1].description}
          link={projects[selectedProject - 1]?.externalLink}
          // link={projects[selectedProject - 1].link}
        />
      )}
    </div>
  );
};

export default Home;
