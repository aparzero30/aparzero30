import "../Header/Header.scss";
import "../About/About.scss";
import AboutCard from "./About-Card/About-Card";

function About() {
  return (
    <div id="about-wrapper" className="col-12">
      <div className="col-6" id="left">
        <div className="picture">
          <div className="rectangle">
            <div className="me"></div>
          </div>
        </div>
        <h1 id="x">JIMUEL CINCO</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <i
          id="l-qoute"
          className="fa-solid fa-quote-left"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
        <p>
          Hi, I'm Jim, My interests are in Software Engineering, and I love to
          create beautiful and performant products with delightful user
          experiences.
        </p>
        <i
          id="r-qoute"
          className="fa-solid fa-quote-right"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
      </div>
      <div className="col-6" id="right">
        <AboutCard
          title="WorkExperience{"
          p1="Associate Software Engineer:"
          p2="MDI NOVARE: NOV 2022-PRESENT"
          p3="}"
          mleft=" 3vw"
        />
        <AboutCard
          title="Education{"
          p1="BS Computer Engineering:"
          p2="RTU-PASIG 2018-2022"
          p3="}"
          mleft=" 12vw"
        />
        <AboutCard
          title="Hobbies{"
          p1="Programming"
          p2="Anime,Movies,Music"
          p3="}"
          mleft=" 21vw"
        />
      </div>
      <div id="links" className="col-12">
        <i
          className="fa-brands fa-discord fa-spin"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
        <i
          className="fa-brands fa-linkedin fa-spin"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
        <i
          className="fa-brands fa-github fa-spin"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
        <i
          className="fa-brands fa-gitlab fa-spin"
          style={{ color: "white", fontSize: "40px" }}
        ></i>
      </div>
    </div>
  );
}

export default About;
