import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="bg-gray-800 p-6 shadow-2xl">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    NewsWebsite
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
                    <NavLink to="india" className="text-gray-300 hover:text-white">India</NavLink>
                    <NavLink to="world" className="text-gray-300 hover:text-white">World</NavLink>
                    <NavLink to="politics" className="text-gray-300 hover:text-white">Politics</NavLink>
                    <NavLink to="bussiness" className="text-gray-300 hover:text-white">Business</NavLink>
                    <NavLink to="tech" className="text-gray-300 hover:text-white">Technology</NavLink>
                    <NavLink to="sport" className="text-gray-300 hover:text-white">Sports</NavLink>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white" onClick={handleToggle}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-full py-10 px-5 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    className="text-gray-300 hover:text-white focus:outline-none focus:text-white absolute top-4 right-4"
                    onClick={handleToggle}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="text-white text-xl font-bold px-3.5 mb-3">
                    NewsWebsite
                </div>
                <NavLink to="/" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">Home</NavLink>
                <NavLink to="india" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">India</NavLink>
                <NavLink to="world" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">World</NavLink>
                <NavLink to="politics" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">Politics</NavLink>
                <NavLink to="bussiness" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">Business</NavLink>
                <NavLink to="tech" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">Technology</NavLink>
                <NavLink to="sport" onClick={handleToggle} className="block text-gray-300 hover:text-white py-2 px-4">Sports</NavLink>
            </div>
        </nav>
    );
};

export default Header;
