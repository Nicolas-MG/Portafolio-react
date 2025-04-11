function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6">Contacto 📬</h2>
      <p className="text-gray-300 mb-8 max-w-xl">
        ¿Tienes un proyecto en mente o quieres que trabajemos juntos? ¡Envíame un mensaje!
      </p>

      <form
        action="https://formspree.io/f/xkgjkybr"
        method="POST"
        className="w-full max-w-lg space-y-4 text-left"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-pink-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-pink-500"
        />
        <textarea
          name="mensaje"
          rows="5"
          placeholder="Tu mensaje..."
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-pink-500"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
