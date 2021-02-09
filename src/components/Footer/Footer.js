import Classes from './Footer.module.css';
import logo from '../../assets/img/logo/malcon.png';

const Footer = () => {
    return (
        <footer className={Classes.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className={Classes.footer__about}>
                        <div className={Classes.footer__logo}>
                            <a href="./index.html"><img src={logo} alt /></a>
                        </div>
                        <h6>About the Company</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            cilisis.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={Classes.footer__widget}>
                        <h6>Contact Us</h6>
                        <ul>
                            <li><a href="#">21st Ave. Revolution - Guatemala, Guatemala</a></li>
                            <li><a href="#">+1 555-2354-52</a></li>
                            <li><a href="#">newtella@newtella.com</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={Classes.footer__copyright__text}>
                        <p>Copyright ©
                            All rights reserved | This
                            template is made with love <i className="fa fa-heart" aria-hidden="true" /> by <a href="#" target="_blank">newtella</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;