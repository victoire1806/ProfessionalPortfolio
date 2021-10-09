import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useClick } from '../Hooks/useClick';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Nav({ pages, page, handlePageChange }) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);
  const hideSideMenu = () => setShowSideMenu(false);

  const navRef = useRef();
  useClick(navRef, hideSideMenu);

  return (
    <nav className="flex flex-col items-end">
      <div>
        {/* Visible links on medium+ screen */}
        <div className="hidden md:flex items-center space-x-2">
          {pages.map((pageName, index) => (
            <NavLink key={index} pageName={pageName} />
          ))}
        </div>

        {/* Side Menu button on -medium screen */}
        <div className="md:hidden">
          <button
            className="text-gray-200 hover:text-white-100 hover:bg-gray-600 p-2 rounded trans-ease-in"
            onClick={toggleSideMenu}>
            <MdMenu size="30px" />
          </button>
        </div>
      </div>

      {/* Side menu on -medium screen */}
      <aside
        ref={navRef}
        className={`absolute right-0 inset-y-0 md:hidden transform ${
          showSideMenu ? '' : 'translate-x-full'
        } transition duration-200 ease-in-out z-10`}>
        <div className="flex flex-col flex-grow items-end w-48 h-screen space-y-2 p-4 bg-gray-600">
          <button
            className="text-gray-200 hover:text-gray-100 hover:bg-gray-500 p-2 rounded"
            onClick={toggleSideMenu}>
            <MdClose size="30px" />
          </button>
          <div className="flex flex-col w-full space-y-2">
            {pages.map((pageName, index) => (
              <NavLinkSide
                key={index}
                pageName={pageName}
                handleLinkClick={hideSideMenu}
              />
            ))}
          </div>
        </div>
      </aside>
    </nav>
  );
}

function NavLink({ pageName }) {
  return (
    <Link
      to={`/${pageName.toLowerCase()}`}
      className="text-lg text-gray-300 hover:text-gray-200 hover:bg-gray-600 px-4 py-2 rounded trans-ease-in">
      {pageName}
    </Link>
  );
}

function NavLinkSide({ pageName, handleLinkClick }) {
  return (
    <Link
      to={`/${pageName.toLowerCase()}`}
      onClick={() => handleLinkClick()}
      className="text-lg text-gray-200 hover:text-gray-100 hover:bg-gray-500 py-2 px-4 rounded trans-ease-in">
      {pageName}
    </Link>
  );
}