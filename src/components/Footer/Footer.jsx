import './Footer.css'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="row">
                    <div className="col">
                        <h4 className='footer-item-title' >FIGHT FEVER SHOP</h4>
                        <ul>
                            <li>Dirección:</li>
                            <li>Cabrera 773,</li>
                            <li>Ciudad Autonoma de Buenos Aires,</li>
                            <li>Argentina.</li>
                        </ul>
                    </div>


                    <div className="col">
                        <h4 className='footer-item-title'>PRODUCTOS</h4>
                        <ul>
                            <li className="footerList">
                                <NavLink to={"/categoria/1"} className="nav-link">Kimonos</NavLink>
                            </li>
                            <li className="footerList">
                                <NavLink to={"/categoria/2"} className="nav-link">Guantes</NavLink>
                            </li>
                            <li className="footerList">
                                <NavLink to={"/categoria/3"} className="nav-link">Indumentaria</NavLink>
                            </li>
                            <li className="footerList">
                                <NavLink to={"/categoria/4"} className="nav-link">Accesorios</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footerLogo">
                        <Link to={"/"} className="nav-link">
                            {
                                <img src="../img/logo2.png" alt="StoreLogo" className="logo" />
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
