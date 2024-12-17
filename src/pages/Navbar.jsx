// import React from 'react'

import { Grip, Menu, SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [color, setColor] = useState('bg-gray-100');

    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.search-bar')) {
                setColor('bg-gray-100');
            }
        };

        document.addEventListener('click', handleClick);

        // Cleanup function
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const ChangeColor = (e) => {
        e.stopPropagation(); // Ye event ko bubble hone se rokta hai
        setColor("bg-white");
    }

  return (
    <div className="w-full h-20 flex items-center justify-between p-2 px-10">
      <div className="flex items-center justify-center gap-2">
        <Menu className="cursor-pointer" />
        <img
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt=""
        />
        <h1>Docs</h1>
      </div>
      <div className="w-[40%]">
        <div className={`search-bar w-full ${color} h-full rounded-full flex items-center gap-3 px-3`}>
          <SearchIcon/>
          <input onClick={ChangeColor} className="w-[90%] bg-transparent h-10 placeholder:text-black" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Grip className="cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer rounded-full overflow-hidden">
          <img src="https://www.gravatar.com/avatar/7654321?s=32&d=identicon&r=PG" alt="" />
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
