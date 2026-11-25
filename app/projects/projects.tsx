export const metadata = { title: "Projects | Your Name" };

const projects = [
  {id: 1, name: "MDC map", description: "Mater Dei College school Map.",},
  {id: 2, name: "ID Scanner Attendance", description: "Scan your ID to mark attendance.",},
  {id: 3, name: "Lost and Found", description: "A search tool that helps users discover lost items.",},
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      {projects.map((project) => (
        <article key={project.id} className="mb-6">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="mb-2">{project.description}</p>
        </article>
      ))}
    </main>
  );
}