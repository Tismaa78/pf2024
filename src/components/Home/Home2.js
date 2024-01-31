import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI <span className="purple"> ME </span> PRESENTER
            </h1>
            <p className="home-about-body">
            Je m'appelle Mathis Roussel et je suis actuellement en première année de BTS SIO section SLAM au Lycée Jean Vilar de Plaisir. Mes spécialités sont le développement et la programmation.
              <br />
              <br />Je maîtrise relativement biens les classiques comme
              <i>
                <b className="purple"> C#, PHP, Javascript SQL et Python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création de nouvelles &nbsp;
              <i>
                <b className="purple">technologies et produits Web </b> ainsi que les domaines liés à la{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion pour le développement de produits avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  les frameworks Javascript modernes 
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ MOI SUR</h1>
            <p>
              Sentez vous libre d'entrez en <span className="purple">contact </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tismaa78"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/tismaa78"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mathis-roussel-2b897523a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqSuP3wq6SpyzC5ML3yBz%2Fw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tismaa.78/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
