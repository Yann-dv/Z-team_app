import Img1 from '../img/competition_1.jpg';
import Img2 from '../img/competition_2.jpg';
import Img3 from '../img/competition_3.jpg';
import InstaLogo from '../img/instagram-logo.png';
import GftLogo from '../img/gft.png';
import ReactPlayer from 'react-player';
import { useState } from 'react';

function HomeContent() {
  return (
    <section id="banner">
      <Banner />
      <article className="homePresentation">
        <p className="academyHistory">
          La Z-Team a été fondée en 2000 par les professeurs Zakaria ARHAB,
          Karim HAMLADJI et Mathias JARDIN, sous la présidence de Mr Isshane
          AKIL. La Z-team est une académie de Jiu-Jitsu Brésilien et de
          Grappling, regroupant des enseignants de haut niveau parmis les
          pionniers du Jiu-jitsu en France, des compétiteurs nationaux et
          internationaux, ainsi qu'un grand nombre de pratiquants. Les
          disciplines du Jiu-jitsu brésilien et du Grappling sont connues depuis
          plusieurs décennies, notamment au travers du MMA (Mixed Martial Arts)
          à partir des années 90.
          <br />
          <br />
          Ces arts martiaux comportent des phases de lutte debout, mais se
          pratiquent principalement au sol. Le Jiu-Jitsu Brésilien est souvent
          comparé jeu d'échecs, nécessitant autant de capacités intellectuelles,
          physiques et stratégiques. Que vous soyez débutant complet,
          intermédiaire ou confirmé, que vous souhaitiez pratiquer
          principalement pour le loisir ou pour vous adonner à des compétitions,
          tous les types de pratiquants sont représentés au sein de notre
          académie, alors n'hésitez plus et{' '}
          <a
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            rejoignez-nous
          </a>{' '}
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
      <div className="instagramLink" >
        <a
          href="https://www.instagram.com/zteambjj/?hl=fr"
          rel="noreferrer"
          target="_blank"
          title="Lien vers Instagram"
          style={{ color: 'black' }}
        >
          <div style={{ display: 'flex', color: 'black', justifyContent: 'center'}}>
          <p className="instagramLink-p">#zteambjj</p> <img src={InstaLogo} alt="Lien vers instagram" style={{ height: '80px'}} />
            </div>
        </a>
      </div>
      <hr></hr>
      <h2 className="section-title">Emplacement du Dojo :</h2>
      <article className="locationMap generalBackground">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.5446679947268!2d2.2319675148436358!3d48.82874861074875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ae337c3835b%3A0x9b96390ef2591f3c!2sEspace%20Forum%20-%20Ville%20de%20Boulogne-Billancourt!5e0!3m2!1sfr!2sfr!4v1667857012555!5m2!1sfr!2sfr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dojo location"
        ></iframe>
      </article>
      <div className="gft-logo">
        <img src={GftLogo} alt="Grappling Fight Team France logo" />
      </div>
    </section>
  );
}

function Banner() {
  const [videoLaunch, setVideoLaunch] = useState(false);

  if (videoLaunch === true) {
    return (
      <section className="banner smooth-show">
        {videoLaunch ? (
          <VideoPlayer />
        ) : (
          <h1 className="bannerTitle">Z-Team Jiu-Jitsu</h1>
        )}
      </section>
    );
  } else {
    setTimeout(() => setVideoLaunch(true), 6000);
    return (
      <section className="banner smooth-show">
        <h1 className="bannerTitle">Z-Team Jiu-Jitsu</h1>
      </section>
    );
  }
}

function VideoPlayer() {
  const [videoEnded, setEnded] = useState(false);
  if (videoEnded === false) {
    return (
      <ReactPlayer
        className="video-player"
        wrapper={'div'}
        url={
          'https://www.youtube.com/watch?v=8HzJTUC6JtE&ab_channel=FloGrappling'
        }
        width={'100%'}
        height={'100%'}
        playing={true}
        muted={true}
        onPause={() => setEnded(true)}
        onError={() => setEnded(true)}
        onEnded={() => setEnded(true)}
      />
    );
  }
  return <h1 className="bannerTitle">Z-Team Jiu-Jitsu</h1>;
}

export default HomeContent;
