import Project from '../components/Project';
import { projects } from '../assets/data/porforlioData';

export default function Portfolio() {
  return (
    <section className="w-full p-8 bg-gray-100">
      <h2 className="py-4 text-center text-gray-600 text-2xl font-bold uppercase ">
        1 0 0 P r o j e c t s
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((projects, index) => (
          <Project key={index} data={projects} />
        ))}
      </div>
    </section>
  );
}