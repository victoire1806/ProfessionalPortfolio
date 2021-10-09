import { FaCode } from 'react-icons/fa';

export default function Project({ data }) {
  return (
    <div className="rounded-md overflow-hidden shadow-md bg-grey-50">
      <div className="flex flex-col h-full">
        <div className="">
         
        </div>
        <div className="flex-grow p-4">
          <h4 className="font-bold text-lg mb-4">{data.title}</h4>
          <ul className="list-disc list-outside ml-8">
            {data.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4 p-4">
      
          <a
            className="inline-block w-1/2 px-4 py-2 border-2 rounded-md border-gray-300 hover:border-gray-400 hover:bg-gray-200 text-gray-500 hover:text-gray-600 text-center font-bold trans-ease-in"
            href={data.source}
            target="_blank"
            rel="noreferrer">
            <FaCode className="inline" /> View Source
          </a>
        </div>
        {/* tags */}
      </div>
    </div>
  );
}