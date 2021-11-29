import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
function Header()
{
    return(
        <div>
        <nav className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                
               
                  

                  <svg xmlns="http://www.w3.org/2000/svg"  id="google-color" className="block h-6 w-6" >
                    <title>Google</title>
                    <g>
                      <path fill="#4285F4" d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 01-1.8 2.71v2.26h2.92a8.78 8.78 0 002.68-6.62z"></path>
                      <path fill="#34A853" d="M12 21a8.6 8.6 0 005.96-2.18l-2.91-2.26a5.4 5.4 0 01-8.09-2.85h-3v2.33A9 9 0 0012 21z"></path>
                      <path fill="#FBBC05" d="M6.96 13.71a5.41 5.41 0 010-3.42V7.96h-3a9 9 0 000 8.08l3-2.33z"></path>
                      <path fill="#EA4335" d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 003.96 7.95l3 2.34A5.36 5.36 0 0112 6.58z"></path>
                    </g>
                  </svg> 
                  <div className="ml-10 flex items-baseline space-x-16 ">
                  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Domains
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                  <p>  Tech stack</p>
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Products
                    </a>
  
                   
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    About Us
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Careers
                    </a>

                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact Us
                    </a>

                    <button type="button" className="bg-white text-xs w-32 h-8 ">
                         Book a call with Us
                    </button>

                  </div>
                </div>
                </div>
             
                </div>
             </nav>
             {/* <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> */}


            </div>
    );
    
    }
     export default Header;