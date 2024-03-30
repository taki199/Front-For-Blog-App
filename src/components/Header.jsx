import React, { useState } from 'react';
import { images } from '../constants';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const NavItemsInfo = [
  { name: 'Home' },
  { name: 'Articles' },
  { name: 'Pages' },
  { name: 'Pricing' },
  { name: 'Faq' },
];

const NavItem = ({ name }) => {
  return (
    <li className='relative group'>
      <a className='px-4 py-2 group-hover:text-green-500' href="/">{name}</a>
      <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  
  const navVisibilityHandler = () => {
    setNavIsVisible(!navIsVisible);
  };

  return (
    <section>
      <header className='container mx-auto py-4 px-5 flex justify-between items-center relative'>
        <div>
          <img className='h-24 w-32' src={images.logo} alt="logo" />
        </div>
        <div className='lg:hidden'>
          {navIsVisible ? (
            <IoClose className="w-6 h-6 cursor-pointer" onClick={navVisibilityHandler} />
          ) : (
            <AiOutlineMenu className='w-6 h-6 cursor-pointer' onClick={navVisibilityHandler} />
          )}
        </div>
        <div className={`${navIsVisible ? "block" : "hidden"} lg:block absolute top-[80px] lg:static bg-dark-hard lg:bg-transparent z-50 w-full lg:w-auto lg:flex flex-col lg:flex-row gap-x-9 items-center`}>
          <ul className='flex flex-col lg:flex-row gap-x-2 font-semibold'>
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className='font-semibold border-2 text-blue-500 py-2 px-4 rounded-full border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'>
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
