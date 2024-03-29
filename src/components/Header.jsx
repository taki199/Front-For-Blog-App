import React from 'react';
import { images } from '../constants';

const NavItemsInfo=[
  {name:'Home'},
  {name:'Articles'},
  {name:'Pages'},
  {name:'Pricing'},
  {name:'Faq'},

]

const NavItem =({name})=>{
  return(
    <li className=' relative group'>
              <a className='px-4 py-2 group-hover:text-green-500' href="/">{name}</a>
              <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
            </li>
    
  )
}
const Header = () => {
  return (
    <section>
      <header className='container mx-auto py-4 px-5 flex justify-between items-center'>
        <div>
          <img className='h-24 w-32' src={images.logo} alt="logo" />
        </div>
        <div className='flex gap-x-9 items-center'>
          <ul className='flex gap-x-2 font-semibold'>
            {NavItemsInfo.map((item)=>{
              return (<NavItem key={item.name} name={item.name}/>)

            })}
            
          </ul>
          <button className='font-semibold border-2 text-blue-500 py-2 px-4 rounded-full border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'>
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
