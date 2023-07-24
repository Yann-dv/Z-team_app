import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footerContainer">
            <ul className="footerList">
                <li className="footerLi"><a className="footerLink" href="mailto:zteam.boulogne@gmail.com">Contact</a></li>
                <li className="footerLi"><Link className="footerLink" to="/z-team_app/legal">Mentions légales</Link></li>
                <li className="footerLi"><Link className="footerLink" to="/z-team_app/">Conditions d'utilisation</Link></li>
                <li className="footerLi"><Link className="footerLink" to="/z-team_app/privacy">Politique de confidentialité</Link></li>
            </ul>
        </footer>
        );
    }
    
export default Footer;
    