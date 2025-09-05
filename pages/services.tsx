export default function Services() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          📘 Maths Tutoring – Build strong problem-solving and logical reasoning.
        </li>
        <li className="border p-4 rounded shadow">
          ✍️ English Tutoring – Improve grammar, comprehension, and writing skills.
        </li>
        <li className="border p-4 rounded shadow">
          🔬 Science Tutoring – Explore concepts with practical learning.
        </li>
        <li className="border p-4 rounded shadow">
          💻 ICT & Programming – Learn computer skills and basic coding.
        </li>
      </ul>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
        <p>₦25,000 per month per subject.</p>
        <p>✅ 20% discount for multiple subjects</p>
        <p>✅ 15% discount for referrals</p>
      </div>
    </div>
  );
}
