import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Bright Step Tutoring</h1>
      <p className="text-lg mb-6">
        Helping Primary & JSS Students Excel in Maths, English, Science & ICT.
      </p>
      <div className="space-x-4">
        <Link href="/services" className="bg-blue-600 text-white px-4 py-2 rounded">
          Our Services
        </Link>
        <Link href="/contact" className="bg-gray-200 px-4 py-2 rounded">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
