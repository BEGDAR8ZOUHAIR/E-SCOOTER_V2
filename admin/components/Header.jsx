import { handleClientScriptLoad } from "next/script";
import React from "react";


const Header = () =>
{
 
  
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-gray-800 text-xl font-bold">
            Admin
          </a>
          <ul className="flex items-center ml-6">
            <li className="ml-6">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Dashboard
              </a>

            </li>
            <li className="ml-6">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Products
              </a>
            </li>
            <li className="ml-6">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Orders
              </a>
            </li>
          </ul>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
