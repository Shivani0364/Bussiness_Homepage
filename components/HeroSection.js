export default function HeroSection() {
  return (
    <section className="bg-blue-50 text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Welcome to MyBusiness
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto text-lg">
        We offer innovative solutions to help your business grow and thrive in a competitive world.
      </p>
      <div className="mt-8">
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}