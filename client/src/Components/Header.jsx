
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
    <header className='bg-purple-200 shadow-md'>
        <div className='flex justify-between items-center mx-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-purple-800'>Supreme</span>
            <span className='text-purple-400'>Estate</span>
        
        </h1>
        </Link>
        <form className= 'bg-white p-1 rounded-md flex items-center'>
            <input type="text" placeholder='Search here' className='bg-transparent focus:outline-none w-24 sm:w-64'/> 
            <FaSearch className="text-purple-800"/>
        </form>
        <ul className="flex gap-5">
            <Link to='/'>
            <li className="hidden sm:inline text-purple-800 hover:underline font-bold">
                Home
            </li>
            </Link>
            <Link to='/About'>
            <li className="hidden sm:inline text-purple-800 hover:underline font-bold">About</li>
            </Link>

            <Link to='/Signin'>
            <li className=" sm:inline text-purple-800 hover:underline font-bold">Sign in</li>
            </Link>
           
        </ul>
        </div>
       
    </header>
    </div>
  )
}
