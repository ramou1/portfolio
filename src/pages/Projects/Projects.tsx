import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import { projects } from "../../data";
import "./Projects.css";

const Projects: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="app">
      <h1 className="projects-title">meus projetos</h1>
      <div className="projects-slider-wrapper">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-slide" key={index}>
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => console.log(`Projeto ${project.title} clicado!`)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
