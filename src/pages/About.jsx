import React from 'react';
import '../assets/pages/_about.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ft from '../assets/images/eu.jpeg'
function About() {
  return (
  <main>
    <section id="home" className="d-flex justify-content-center align-items-center min-vh-100 ">
      <Container>
        <Row>
          <Col md={6}>
            <div className="p-4 rounded-3 txt" >
              <p>Sou um estudante dedicado e motivado, atualmente em busca de oportunidades para iniciar minha jornada profissional como estagiário na área de Tecnologia da Informação (TI). Possuo uma sólida formação acadêmica e estou ansioso para aplicar os conhecimentos teóricos adquiridos em um ambiente prático e desafiador.</p>
              <p>Estou atualmente cursando Ensino Médio Técnico no Cotemig, onde tenho me dedicado ao estudo de disciplinas fundamentais em TI.</p>
              <p>Busco uma oportunidade de estágio em Tecnologia da Informação, onde possa aplicar meus conhecimentos acadêmicos de forma prática, aprender com profissionais experientes e contribuir para o sucesso da equipe. Estou ansioso para desenvolver minhas habilidades técnicas e adquirir experiência no ambiente corporativo.</p>
              <p>Demonstro habilidades interpessoais sólidas, sendo capaz de colaborar efetivamente em equipe, compartilhar conhecimento e comunicar ideias de forma clara e concisa.</p>
              <p>Programação: Familiarizando com HTML, CSS/SCSS, JavaScript, SQL </p>
              <p>Aprendendo: NodeJS, PHP, ReactJS, Kotlin, Laravel, Swift</p>

            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img src={ft} alt="eu" className="img-fluid rounded-3" />
          </Col>
        </Row>
      </Container>
    </section>

  </main>
    
  );
}

export default About;
