import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-amber-700">
        Hello, my name is Hope John Bagaipo
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        BSIT 3rd Year Student.
        Study from Mater Dei College.
      </p>
      <Link
        href="/projects"
        className="bg-black text-white px-4 py-2 rounded"
      >
        See my projects
      </Link>
    </main>
  );
}