import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo1.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center relative">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold">Mi Portafolio</span>
      </Link>

      {/* Botón hamburguesa */}
      <button className="sm:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú en pantallas grandes */}
      <ul className="hidden sm:flex gap-4 text-sm sm:text-base">
        <li><Link to="/" className="hover:text-pink-500 transition">Inicio</Link></li>
        <li><Link to="/sobre-mi" className="hover:text-pink-500 transition">Sobre mí</Link></li>
        <li><Link to="/proyectos" className="hover:text-pink-500 transition">Proyectos</Link></li>
        <li><Link to="/contacto" className="hover:text-pink-500 transition">Contacto</Link></li>
      </ul>

      {/* Menú desplegable animado para móviles */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 sm:hidden z-40"
          >
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Inicio</Link></li>
            <li><Link to="/sobre-mi" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Sobre mí</Link></li>
            <li><Link to="/proyectos" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Proyectos</Link></li>
            <li><Link to="/contacto" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Contacto</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;



// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo1.png';
 

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
//       <Link to="/" className="flex items-center gap-2">
//         <img src={logo} alt="Logo" className="h-10 w-auto" />
//         <span className="text-xl font-bold">Mi Portafolio</span>
//       </Link>
//       <ul className="flex gap-4 text-sm sm:text-base">
//         <li><Link to="/" className="hover:text-pink-500 transition ">Inicio</Link></li>
//         <li><Link to="/sobre-mi" className="hover:text-pink-500 transition">Sobre mí</Link></li>
//         <li><Link to="/proyectos" className="hover:text-pink-500 transition">Proyectos</Link></li>
//         <li><Link to="/contacto" className="hover:text-pink-500 transition">Contacto</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
