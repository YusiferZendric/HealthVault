import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserMd, FaHospital, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { RiUserHeartFill } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLogin } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', text: 'Login', icon: <MdLogin className="w-5 h-5" /> },
    { path: '/patient', text: 'Patient', icon: <RiUserHeartFill className="w-5 h-5" /> },
    { path: '/doctor', text: 'Doctor', icon: <FaUserMd className="w-5 h-5" /> },
    { path: '/hospital', text: 'Hospital', icon: <FaHospital className="w-5 h-5" /> },
    { path: '/documents', text: 'Documents', icon: <FaFileAlt className="w-5 h-5" /> },
    { path: '/charts', text: 'Charts', icon: <FaChartLine className="w-5 h-5" /> }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <RiUserHeartFill className="w-8 h-8" />
              <span>HealthVault</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActivePath(link.path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <AiOutlineClose className="block h-6 w-6" />
              ) : (
                <BiMenuAltRight className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActivePath(link.path)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">{link.icon}</span>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;