export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50 text-center">
      <h3 className="text-3xl font-bold mb-8">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow rounded">
          <h4 className="text-xl font-semibold mb-2">Web Development</h4>
          <p className="text-gray-600">Building fast, responsive websites and apps with modern technologies.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
          <p className="text-gray-600">Crafting beautiful and user-friendly interfaces for a seamless experience.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
          <p className="text-gray-600">Driving traffic and increasing conversions through smart digital campaigns.</p>
        </div>
      </div>
    </section>
  );
}