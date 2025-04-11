import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-6 mt-0">
        <p className="text-sm">
          © {new Date().getFullYear()} Nicolás MG. Todos los derechos reservados.
        </p>
        <div className="mt-2 flex justify-center gap-6">
          <a href="https://github.com/Nicolas-MG"
             target="_blank" rel="noreferrer" 
             className="hover:text-pink-500 hover:scale-200 transition-transform duration-300 text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-marin-83250a24a/"
             target="_blank" rel="noreferrer" 
             className="hover:text-pink-500 hover:scale-200 transition-transform duration-300 text-xl">
            <FaLinkedin />
          </a>
        </div>
      </footer>
      
    );
  }
  export default Footer;