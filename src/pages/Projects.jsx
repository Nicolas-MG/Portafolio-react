import ProyectoCard from "../components/ProyectoCard";

import img1 from "../assets/portafolio.png";
import img2 from "../assets/Pythonlogo.svg";
import img3 from "../assets/tienda.png";


function Projects() {
  const proyectos = [
    {
      nombre: "Mi Portafolio",
      descripcion: "Sitio personal hecho con React y TailwindCSS.",
      imagen:  img1, 
      tecnologias: ["React", "Tailwind", "Framer Motion"],
      demo: "https://portafolio-react-sage.vercel.app/proyectos",
      codigo: "https://github.com/Nicolas-MG/Portafolio-react"
    },
    {
      nombre: "Dashboard de Datos",
      descripcion: "Dashboard interactivo usando Power BI y Python.",
      imagen: img2,
      tecnologias: ["Power BI", "Python", "SQL"],
      demo: "https://github.com/Nicolas-MG/Analisis_de_Datos",
      codigo: "https://github.com/Nicolas-MG/Analisis_de_Datos"
    },
    {
      nombre: "Tienda Online",
      descripcion: "Tienda virtual hecha con Angular y TailwindCSS.",
      imagen: img3,
      tecnologias: ["Angular", "Tailwind", "Node.js"],
      demo: "https://diem-19.vercel.app/",
      codigo: "https://github.com/Nicolas-MG/Diem"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Proyectos 💻</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {proyectos.map((proyecto, index) => (
      <ProyectoCard key={index} proyecto={proyecto} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
