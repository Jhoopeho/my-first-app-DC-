import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Hi, I'm Hope John Bagaipo
      </h1>
      <p className="mb-2">
        Welcome to my first Next.js app.
      </p>
      <p className="mb-2">
        I am a college student learning web development.
      </p>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}