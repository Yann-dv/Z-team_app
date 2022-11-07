import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footerContainer">
            <ul className="footerList">
                <li className="footerLi"><a className="footerLink" href="mailto:zteam.boulogne@gmail.com">Contact</a></li>
                <li className="footerLi"><Link className="footerLink" to="/legal">Legal Notice</Link></li>
                <li className="footerLi"><Link className="footerLink" to="/">Terms of Service</Link></li>
                <li className="footerLi"><Link className="footerLink" to="/privacy">Privacy Policy</Link></li>
            </ul>
        </footer>
        );
    }
    
export default Footer;
    