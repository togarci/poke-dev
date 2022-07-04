import logo from '../assets/img/logo.png';

export default function Header() {
    return (
        <div id="header" className="d-flex col-12 align-items-center justify-content-between">
            <img className='col-1' src={logo} alt="logo" />
            <nav className='d-flex align-items-center justify-content-start col-7'>
                <ul className='d-flex col-8 align-items-center justify-content-between'>
                    <li className='currentPage'>Home</li>
                    <li>Pokemons</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}