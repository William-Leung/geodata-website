import './ProjectCard.css';
const ProjectCard = ({projectName,teamName, description }) => {
    return (
            <div className="project-card__content">
                <h2 className="project-card__title">{projectName}</h2>
                <p className="project-card__team">{teamName}</p>
                <p className="project-card__description">{description}</p>
            </div>
    );
};

export default ProjectCard;