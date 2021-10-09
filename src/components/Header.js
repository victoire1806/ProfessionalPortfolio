import Nav from './Nav';
//import img1 from ''

export default function Header({ pages, page, handlePageChange }) {
  return (
    <header className="fixed top-0 w-full max-w-10xl">
      <div className="flex justify-between items-center p-4 bg-pink-800">
        <h1 className="text-xl md:text-3xl tracking-wide text-gray-100 font-bold">
          Anne Joseph
        </h1>
        <Nav pages={pages} />
      </div>
    </header>
    
    
   
    
  );
}