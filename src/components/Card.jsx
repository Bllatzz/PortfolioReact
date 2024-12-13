import React from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/styles/layouts/_card.scss";

const ProjectCard = ({ project }) => {
  const imageUrl = project.image || "https://via.placeholder.com/150";

  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imageUrl} alt="Project image" />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.description || "No description available."}
        </Card.Text>
        <Button variant="primary" href={project.html_url} target="_blank">
          Ver no GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
