import Img1 from "./img/competition_1.jpg";
import Img2 from "./img/competition_2.jpg";
import Img3 from "./img/competition_3.jpg";

function HomeContent() {
  return (
    <section className="homeContainer">
      <article className="homePresentation">
        <p className="academyHistory">
          The Z-Team was founded in 2000 by Mestres Zakaria ARHAB, Karim
          HAMLADJI, Mathias JARDIN, under the chairmanship of Mr Isshane AKIL.
          Z-team is an academy of Brazilian Jiu-Jitsu and Grappling, including
          a large number of high level teachers, national and international
          competitors, as well as a large number of students. The disciplines of
          Brazilian Jiu-jitsu and Grappling have been known for several decades,
          in particular through MMA (Mixed Martial Arts) from the 90's. These
          martial arts include phases of standing wrestling, but are mainly
          practiced on the ground. Brazilian Jiu-Jitsu is often compared to the
          game of chess, requiring as much intellectual, physical and strategic
          capacities. Whether you are a complete beginner, intermediate or
          confirmed, whether you want to practice mainly for leisure or to
          engage in competitions, all types of practitioners are represented
          within our academy, so don't hesitate and{" "}
          <a
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            join us
          </a>
          !
        </p>
      </article>
      <article className="homeImages">
        <div className="homeImageContainer">
          <img className="homeImage" src={Img1} alt="alt" />
        </div>
        <div className="homeImageContainer">
          <img className="homeImage" src={Img2} alt="alt" />
        </div>
        <div className="homeImageContainer">
          <img className="homeImage" src={Img3} alt="alt" />
        </div>
      </article>
    </section>
  );
}

export default HomeContent;
