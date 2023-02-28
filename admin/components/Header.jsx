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
        <div class="md:ml-20">
          <img
            class="w-20 h-20 md:w-20 md:h-20 object-cover rounded-full border-2 border-pink-600 p-1"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="profile"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
