import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ProyectoCard({ proyecto }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 p-6 rounded-2xl shadow-md hover:scale-105 transition"
    >
        <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-40 object-cover rounded-xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">{proyecto.nombre}</h3>
        <p className="text-gray-300 mb-3">{proyecto.descripcion}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-4">
            {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="bg-pink-600 px-2 py-1 rounded-md">{tech}</span>
            ))}
        </div>
        <div className="flex gap-4">
            <a href={proyecto.demo} target="_blank" rel="noreferrer" className="bg-pink-500 
            hover:bg-pink-600 text-white px-4 py-2 rounded-lg">Demo</a>
            <a href={proyecto.codigo} target="_blank" rel="noreferrer" className="border 
            border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg">Código</a>
        </div>
    </motion.div>
);
}

export default ProyectoCard;
