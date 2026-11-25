export const metadata = {
  title: "Projects | Hope John Bagaipo",
};

const projects = [
  {
    id: 1,
    name: "MDC Map",
    description: "Mater Dei College school map.",
  },
  {
    id: 2,
    name: "ID Scanner Attendance",
    description: "Scan an ID to mark attendance.",
  },
  {
    id: 3,
    name: "Lost and Found",
    description: "A search tool that helps users discover lost items.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border-t border-stone-200 pt-4"
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
