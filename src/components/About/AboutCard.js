import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Salut à tous, je m'appelle <span className="purple">Mathis Roussel </span>
            de <span className="purple"> Paris en France.</span>
            <br />
            Je suis actuellement en deuxième années de BTS SIO au lycée jean vilar de Plaisir.
            <br />
            Mon objectif est de me spécialiser dans le développement et la programmation ou dans la cybersécurité, découvrir de nouveaux systèmes, apprendre à travailler sur des projets.
            <br />
            <br />
            En dehors du codage, d'autres activités que j'adore faire !

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire des livres
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Solve your problems by becoming rich and if possible by crushing others."{" "}
          </p>
          <footer className="blockquote-footer">Jordan Belfort</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
