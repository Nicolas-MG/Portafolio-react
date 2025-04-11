import { Link } from 'react-router-dom';
import logo from '../assets/Logo1.png';
 

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold">Mi Portafolio</span>
      </Link>
      <ul className="flex gap-4 text-sm sm:text-base">
        <li><Link to="/" className="hover:text-pink-500 transition ">Inicio</Link></li>
        <li><Link to="/sobre-mi" className="hover:text-pink-500 transition">Sobre mí</Link></li>
        <li><Link to="/proyectos" className="hover:text-pink-500 transition">Proyectos</Link></li>
        <li><Link to="/contacto" className="hover:text-pink-500 transition">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
