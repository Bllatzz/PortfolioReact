import React from 'react';
import '../assets/pages/_projects.scss';
import { useEffect, useState } from 'react'
import ProjectCard from '../components/Card';



function Projects() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bllatzz/repos');
        const data = await response.json();

        const reposWithImages = await Promise.all(
          data.map(async (repo) => {
            const readmeResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`, {
              headers: { Accept: 'application/vnd.github.v3.raw' }
            });
            const readme = await readmeResponse.text();
            const imageUrlMatch = readme.match(/!\[.*\]\((.*)\)/); 
            const imageUrl = imageUrlMatch ? imageUrlMatch[1] : 'https://via.placeholder.com/150';
            return { ...repo, image: imageUrl };
          })
        );

        setRepositories(reposWithImages);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <main>
       <div className="portfolio">
      <h1>Meus Projetos</h1>
      <div className="project-list">
        {repositories.map((repo) => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
    </main>
   
  );
};

export default Projects;
