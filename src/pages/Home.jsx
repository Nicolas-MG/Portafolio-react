import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/Logo1.png"

function Home() {
  return (
    
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <img src={logo} alt="logo" className="w-auto max-w-[180px] sm:max-w-[240px] md:max-w-[320px] h-auto object-contain mx-auto" />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-extrabold mb-4"
      >
        ¡Hola! Soy <span className="text-pink-500">Nicolas Marin G.</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 , duration: 1 }}
        className="text-2xl sm:text-3xl font-semibold mb-6"
      >
        <span className="text-white" >& Soy&nbsp;</span>
        <span className="text-pink-500 font-bold" >
          <Typewriter
            words={['Frontend',
                    'Analista de Datos',
                    'Developer'
                   ]}
            loop={ true }
            cursor
            cursorStyle='🛫'
            typeSpeed={ 75 }
            deleteSpeed={ 50 }
            delaySpeed={ 1000}
          />
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg sm:text-xl max-w-xl mb-8 text-gray-300"
      >
        Apasionado por crear experiencias digitales increíbles y transformar datos en decisiones.
      </motion.p>

      <Link to="/proyectos">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
      >
        Ver Proyectos
      </motion.a>
      </Link>
    </section>
    
  );
}
export default Home;
