import { Link, useParams } from "react-router-dom";
import BtnGitHub from "../components/Buttons/BtnGitHub/BtnGitHub";
import { cardData } from "../helpers/projectsList";

const ProjectPage = () => {
  const { id } = useParams();
  const card = cardData.find((c) => c.id === parseInt(id));

  if (!card) return <h2>🔍 Project not found</h2>;

  return (
    <main className="section">
      <div className="container">
        <Link to={"/projects"}>{"<< Exit"}</Link>
        <div className="project-details">
          <h1 className="title-1">{card.title}</h1>

          <img
            src={card.imgBig}
            alt={card.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {card.skills}</p>
          </div>
          {card.gitHubLink && <BtnGitHub link={card.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
