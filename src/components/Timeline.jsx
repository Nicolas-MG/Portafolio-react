import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiencia = [
    {
        tipo: "Trabajo",
        titulo: "Desarrollador Frontend - Sura",
        fecha: "Ene 2024 - Dic 2024",
        descripcion: "Implementé un formulario condicional con lógica interactiva, donde las opciones seleccionadas por los usuarios determinaban en tiempo real si calificaban como aliados digitales de alto potencial.",
      },
      {
        tipo: "Estudio",
        titulo: "Curso de Angular - Platzi",
        fecha: "2024",
        descripcion: "Aprendí Angular desde cero, estructuras, componentes, servicios y enrutamiento.",
      },
      {
        tipo: "Estudio",
        titulo: "Análisis de Datos - Udemy",
        fecha: "2023",
        descripcion: "Curso intensivo con Python, SQL, Power BI y visualización de datos.",
      },
]

const TimelineItem = ({ item }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
  
    const icon = item.tipo === "Trabajo" ? <FaBriefcase /> : <FaGraduationCap />;
    const iconColor = item.tipo === "Trabajo" ? "bg-pink-500" : "bg-cyan-400";
  
    const variants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
  
    if (inView) controls.start("visible");
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="relative"
      >
        <div className={`absolute -left-3 top-1.5 w-6 h-6 ${iconColor} text-white flex items-center justify-center rounded-full border-4 border-gray-900 text-sm`}>
          {icon}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">{item.titulo}</h3>
          <span className="text-sm text-pink-400">{item.fecha}</span>
          <p className="mt-2 text-gray-300">{item.descripcion}</p>
        </div>
      </motion.div>
    );
  };
  
  const Timeline = () => {
    return (
      <section className="bg-gray-900 text-white py-3 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-500">Experiencia & Educación</h2>
        <div className="relative border-l border-pink-500 max-w-4xl mx-auto pl-6 space-y-10">
          {experiencia.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Timeline;