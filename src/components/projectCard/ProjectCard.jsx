import { Link } from "react-router-dom";

const ProjectCard = ({ title, img, id }) => {
  return (
    <li className="project">
      <Link to={`/project/${id}`}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
};

export default ProjectCard;
