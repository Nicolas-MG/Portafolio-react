import angular from '../assets/Angular.png';
import react from '../assets/react.png';
import tailw from '../assets/tailwind.png';
import powerbi from '../assets/powerBi-2.png';
import python from '../assets/Pythonlogo.svg';
import sql from '../assets/Sql-logo.svg';
import framer from '../assets/framer.png';
import js from '../assets/js-icon.png'
import mifoto from '../assets/Foto_mia.jpg';
import stream from '../assets/streamlit.png';

const skills = [
  { name: 'Angular', icon: angular },
  { name: 'React', icon: react },
  { name: 'Tailwind', icon: tailw },
  { name: 'Power BI', icon: powerbi },
  { name: 'Python', icon: python },
  { name: 'SQL', icon: sql },
  { name: 'Streamlit', icon: stream },
  { name: 'Framer Motion', icon: framer },
  { name: 'JAVASCRIPT', icon: js }
];

function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-22 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Sobre mí 👨‍💻</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={mifoto}
            alt="Mi foto"
            className="w-95 h-95 object-cover rounded-full border-4 border-pink-500 shadow-lg"
          />
        </div>

        {/* Descripción + skills */}
        <div>
          <p className="text-lg text-gray-300 mb-6">
            ¡Hola! Soy <span className="text-pink-500 font-semibold">Nicolás</span>, Desarrollador Frontend con pasión por crear experiencias visuales potentes. Tengo experiencia con Angular, React y también soy analista de datos con Power BI, Python y SQL. Mi enfoque está en construir interfaces limpias y funcionales.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-xl border border-pink-500"
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
