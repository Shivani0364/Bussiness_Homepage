export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
      <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}