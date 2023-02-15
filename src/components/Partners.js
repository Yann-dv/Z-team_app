import Gft from "../img/gft.jpg";
import Blr from "../img/blr.jpg";
import BuiltByKids from "../img/builtbykids.jpg";

import ArtisteMartial from "../img/artistemartial.jpg";
import GftLogo from "../img/gft.png";


function Partners() {
    return (
        <section className="generalContainer">
            <div className="generalBackground shopBackground">
            <div className="smooth-show">
                <h2 className="section-title">Gym Partners</h2>
                <div className="partners-flex">
                    <a href="https://www.gfteamofficial.com/" target="_blank" rel="noreferrer nofollow" className="partners-link"><img src={Gft} alt="Grappling Fight Team" /></a>
                    <a href="https://www.blrjj.com/" target="_blank" rel="noreferrer nofollow" className="partners-link"><img src={Blr} alt="B.L.R Jiu Jitsu" /></a>
                    <a href="https://builtbykids.fr/" target="_blank" rel="noreferrer nofollow" className="partners-link"><img src={BuiltByKids} alt="Built By Kids JJB" /></a>
                </div>
                <h2 className="section-title">Sponsors</h2>
                <div className="partners-flex">
                    <a href="https://artistemartial.com/" target="_blank" rel="noreferrer nofollow" className="partners-link"><img src={ArtisteMartial} alt="Artiste Martial" /></a>
                    <a href="home" target="_blank" rel="noreferrer nofollow"><img className="min" src={GftLogo} alt="Grappling Fight Team France logo" /></a>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Partners;