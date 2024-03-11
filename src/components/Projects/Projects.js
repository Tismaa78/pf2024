import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Crypto from "../../Assets/Projects/Crypto.png";
import Lavage from "../../Assets/Projects/lavage.png";
import Basket from "../../Assets/Projects/basket.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Stages
          <strong className="purple"> et Projets Récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Dans le cadre de mes 2 années de BTS SIO, j'ai dû effectuer un stage de 6 semaines et un second stage de 7 semaines dans l'entreprise KONTRON TRANSPORTATION. Durant le premier stage, ma mission a été de créer un mini logiciel servant à analyser et trier les données d'un document Excel, car l'entreprise doit rendre un compte rendu mensuel du système de sécurité de leurs PC à la SNCF. Il sert donc à simplifier le travail de la personne qui s'occupe du compte-rendu. La deuxième mission qui m'a été attribuée durant mon second stage a été la création de scripts afin d'automatiser l'alimentation d'une liste SharePoint par un fichier Excel qui change tous les jours.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Un de mes PortFolio"
              description="Découvrez mon portfolio interactif créé en JavaScript avec React. Explorez mes projets et expériences de manière moderne. La conception réactive assure une expérience utilisateur fluide."
              ghLink="https://github.com/Tismaa78/PortFolio-Mathis"
              demoLink="https://tismaa78.github.io/PortFolio-Mathis/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Logiciel qui analyse et trie des données"
              description="Dans le cadre de ma première année de BTS SIO, j'ai dû effectuer un stage de 6 semaines dans l'entreprise KONTRON TRANSPORTATION. Durant ce stage, ma mission a été de créer un mini logiciel servant à analyser et trier les données d'un document Excel, car l'entreprise doit rendre un compte rendu mensuel du système de sécurité de leurs PC à la SNCF."
              ghLink="https://github.com/Tismaa78/PACS_SNCF"
              demoLink="https://youtu.be/xSDuEdvIUFU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lavage}
              isBlog={false}
              title="Lavage Auto"
              description="Site web pour une station de lavage permettant la prise d'information et la prise de rendez-vous."
              ghLink="https://github.com/Tismaa78/DidiLavage"
              demoLink="https://tismaa78.github.io/DidiLavage/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Site web pour un ostéopathe"
              description="Ce site web a été spécialement conçu pour un ostéopathe, offrant une plateforme complète qui permet non seulement la prise de rendez-vous en ligne, simplifiant ainsi le processus pour les patients, mais également un suivi détaillé des consultations"
              ghLink="https://github.com/Tismaa78/site-osteo"
              demoLink="https://cyrillandes-osteo.000webhostapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BreakOut"
              description="Un jeu style arcade casse-briques classique réalisé en JavaScript. Détruisez les briques avec votre paddle. Jouez dès maintenant !"
              ghLink="https://github.com/Tismaa78/BreakOut"
              demoLink="https://tismaa78.github.io/BreakOut/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Site hommage à l'Olympique de Marseille"
              description="Célébrez l'Olympique de Marseille sur mon site dédié. Explorez l'histoire du club, partagez la passion des supporters et revivez les moments inoubliables. L'OM, bien plus qu'un club, une passion partagée."
              ghLink="https://github.com/Tismaa78/OlympiqueDeMarseille"
              demoLink="https://tismaa78.github.io/OlympiqueDeMarseille/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Jeu de Dame"
              description="Explorez la stratégie classique avec notre jeu de dames JavaScript. Jouez en ligne, défiez vos amis, et maîtrisez l'art du mouvement tactique. Prêt pour l'aventure ? Jouez maintenant !"
              ghLink="https://github.com/Tismaa78/Jeu-De-Dame"
              demoLink="https://tismaa78.github.io/Jeu-De-Dame/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Crypto"
              description="Site web retracant le cour actuelle du top 25 des crypto-monnaie en terme de tendances, ce projet JavaScript fait un clin d'oeil à ma veille technologique sur le sujet de la blockchain et des cryto-monnaie"
              ghLink="https://github.com/Tismaa78/Crypto"
              demoLink="https://tismaa78.github.io/Crypto/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Basket}
              isBlog={false}
              title="Basket "
              description="Un jeu panier de basket classique réalisé en JavaScript. Marquez des paniers. Jouez dès maintenant !"
              ghLink="https://github.com/Tismaa78/basket"
              demoLink="https://tismaa78.github.io/basket/"      
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
