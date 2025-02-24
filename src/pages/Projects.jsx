import ProjectCard from "../components/projectCard/ProjectCard";
import { cardData } from "../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {cardData.map((c) => {
            return (
              <ProjectCard key={c.id} id={c.id} img={c.img} title={c.title} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
