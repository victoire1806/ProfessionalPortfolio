import { skills } from '../assets/data/porforlioData';
import resume  from '../assets/data/anne-joseph-resume.pdf';

export default function Skills() {
  return (
    <section className="w-full p-8 bg-gray-100">
      <h2 className="py-4 text-center text-black-600 text-2xl font-bold uppercase ">
        Development Tech Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-8 py-8">
        <SkillCard data={skills.frontEnd} />
        <SkillCard data={skills.backEnd} />
        <SkillCard data={skills.devTools} />
      </div>

      <div className="flex justify-center mb-8">
        <div className="px-4 py-2 border-2 rounded-md border-black-600 hover:border-black-500 bg-black-600 hover:bg-black-500 text-black-200 hover:text-blacl-100 text-center font-bold trans-ease-in">
          <a
            href= {resume}
            target="_blank"
            rel="noreferrer">
            View Résumé
          </a> 
        </div>
      </div>
    </section>
  );
}

function SkillCard({ data }) {
  return (
    <div className="rounded-md overflow-hidden shadow-md bg-black-50">
      <div className="flex flex-col h-full">
        <div className="bg-black-600 px-4 py-3">
          <h4 className="text-black-200 font-bold text-lg">{data.title}</h4>
        </div>
        <div className="px-4 py-3">
          <ul className="list-disc list-outside ml-8">
            {data.notes.map((note, index) => (
              <li className="my-1" key={index}>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}