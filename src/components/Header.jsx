import logo from '../assets/img/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const path = useLocation();
    
    return (
        <div id="header" className="d-flex col-12 align-items-center justify-content-between">
            <img className='col-1' src={logo} alt="logo" />
            <nav className='d-flex align-items-center justify-content-start col-7'>
                <ul className='d-flex col-8 align-items-center justify-content-between'>
                    <li className={path.pathname === '/home' ? 'currentPage' : ''}> <Link to="/home">Home</Link></li>
                    <li className={path.pathname === '/pokemons' ? 'currentPage' : ''}><Link to="/pokemons">Pokemons</Link></li>
                    <li className={path.pathname === '/contato' ? 'currentPage' : ''}><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </div>
    )
}