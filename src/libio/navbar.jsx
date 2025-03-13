import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/cardimg/mainlog1.jpeg';
import img from '../assets/cardimg/menu icon.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const nextpages = () => {
    navigate('/nextpage');
  };

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
    console.log(!isOpen ? "Opening" : "Closing");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="bg-black text-white flex items-center w-full p-4">
        {/* Logo */}
        <div className="ml-2 rounded-2xl">
          <img className="w-50 h-20 rounded-full" src={img1} alt="Logo" />
        </div>

        <div className="flex w-full">
          <label className="font-bold text-xl mx-5 my-4">LIBI'O</label>
        </div>

        {/* Desktop Menu */}
        <ol className="hidden md:flex justify-end font-semibold text-xl gap-12 mr-10">
          <li onClick={() => navigate('/')} className="cursor-pointer hover:underline hover:text-blue-500">Home</li>
          <li onClick={() => navigate('/menu')} className="cursor-pointer hover:underline hover:text-blue-500">Menu</li>
          <li onClick={() => navigate('/About')} className="cursor-pointer hover:underline hover:text-blue-500">About Us</li>
          <li onClick={() => navigate('/contactus')} className="cursor-pointer hover:underline hover:text-blue-500">Contact Us</li>
        </ol>

        {/* <button 
          onClick={nextpages} 
          className="hidden md:block border px-8 py-2 mr-10 rounded-full bg-white text-black hover:bg-blue-400 hover:text-white border-gray-400"
        >
          Buy
        </button> */}

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={handleToggle}>
            <img className="w-10 h-10 mr-5 rounded-full" src={img} alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="block md:hidden bg-black text-white p-4">
          <ol className="flex flex-col gap-6 items-center text-xl">
            <li onClick={() => navigate('/')} className="cursor-pointer hover:underline hover:text-blue-500">Home</li>
            <li onClick={() => navigate('/menu')} className="cursor-pointer hover:underline hover:text-blue-500">Menu</li>
            <li onClick={() => navigate('/About')} className="cursor-pointer hover:underline hover:text-blue-500">About Us</li>
            <li onClick={() => navigate('/contactus')} className="cursor-pointer hover:underline hover:text-blue-500">Contact Us</li>
          </ol>

          <div className="flex justify-center items-center my-5">
            <button 
              onClick={nextpages} 
              className="border-2 px-8 py-2 rounded-full bg-white text-black border-gray-400 hover:bg-blue-400 hover:text-white"
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
