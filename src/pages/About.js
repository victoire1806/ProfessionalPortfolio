import { Link } from 'react-router-dom';
//import img1 from "../assets/images/"

export default function About() {
  return (
     
  
    <section className="flex flex-col-reverse md:flex-row">
      <div className="flex flex-col justify-center items-center space-y-4 bg-gray-100 md:w-1/2 p-6">

      <div class="max-w-sm rounded overflow-hodden shadow-lg">
    <img src="https://i.postimg.cc/Qd67V9Cg/Annes-Photo.jpg" alt=""
      className="w-small"/>
    </div>
    
        <h3 className="text-center md:text-xl text-black-700 font-bold uppercase mb-2">
          Developer <span>&nbsp;&ndash;&nbsp;</span> Programmer{' '}
          <span>&nbsp;&ndash;&nbsp;</span> Researcher
        </h3>
        <p className="text-black-600 text-justify">
          Thank you for visiting, my name is Anne and I am a
          full-stack web developer. As an advid learner, I have been enthusiastically
          cultivating web development skills and joined an applied web development
          course through Columbia University Coding Bootcamp to gain experience working
          in a collaborative environment and expand my professional network.
        </p>
        <p className="text-black-600 text-justify">
        I am ready to take on challenges and is a passionate Tech Enthusiast. 
        </p>
        <Link
          to={`/portfolio`}
          className="border-2 rounded-md  border-black-300 hover:border-black-700 hover:bg-black-700 text-black-700 hover:text-black-200 md:text-lg font-bold px-4 py-2 trans-ease-in">
          View Portfolio
        </Link>
      </div>
      
      
      <div className="bg-landing bg-cover bg-center bg-no-repeat h-full md:w-1/2">
      <img src="https://i.postimg.cc/zGRxBfBc/deskPad.jpg" alt=""
      className="w-full"/>
      </div>
      
       


    </section>
    
  );
}