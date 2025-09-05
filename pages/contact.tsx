export default function Contact() {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">We’d love to hear from you! Reach us via:</p>
      <ul className="space-y-2">
        <li>📧 Email: <a href="mailto:brightsteptutoring@gmail.com" className="text-blue-600">brightsteptutoring@gmail.com</a></li>
        <li>📱 Phone: +234-XXX-XXX-XXXX</li>
        <li>🌐 Website: bright-step-tutoring.vercel.app</li>
      </ul>

      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
