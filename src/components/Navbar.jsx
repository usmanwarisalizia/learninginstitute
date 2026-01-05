import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBookOpen, FaGlobeAmericas, FaGraduationCap, FaLaptopCode, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'IELTS', icon: <FaBookOpen className="mr-2" />, path: '/ielts' },
        { name: 'PTE', icon: <FaGlobeAmericas className="mr-2" />, path: '/pte' },
        { name: 'Spoken English', icon: <FaGraduationCap className="mr-2" />, path: '/spoken-english' },
        { name: 'Digital Skills', icon: <FaLaptopCode className="mr-2" />, path: '/digital-skills' },
        { name: 'Contact Us', icon: <FaPhoneAlt className="mr-2" />, path: '/contact' },
    ];

    return (
        <nav className="bg-linear-to-r from-[#c5eeed] via-white to-[#c5eeed] border-2 border-white shadow-xl sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
            <div className="container mx-auto px-4">
                {/* Main Navbar */}
                <div className="flex justify-between items-center py-3 md:py-4">

                    {/* Logo Section - Short Form */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-linear-to-r from-[#02c9cd] to-[#02a8cc] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative p-3 bg-white rounded-full shadow-lg">
                                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                    <FaBookOpen className="w-full h-full text-[#02c9cd]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-baseline">
                            <div className="flex items-baseline gap-1 md:gap-2">
                                <span className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-[#02a8cc] via-[#02c9cd] to-[#02a8cc] bg-clip-text text-transparent">
                                    LS
                                </span>
                            </div>
                            <div className="flex text-xs md:text-sm font-bold mt-0.5">
                                <span className="text-[#02c9cd]">L</span>
                                <span className="text-gray-800">earning</span>
                                <span className="ml-1 text-[#02c9cd]">S</span>
                                <span className="text-gray-800">phere</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="relative px-5 py-2.5 mx-2 text-gray-800 font-semibold rounded-lg group transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 flex items-center text-lg">
                                    {item.icon}
                                    {item.name}
                                </span>
                                <span className="absolute inset-0 bg-linear-to-r from-[#c5eeed]/30 to-[#02c9cd]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#02c9cd] to-[#02a8cc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2.5 md:p-3 rounded-full bg-linear-to-r from-[#c5eeed] to-white border border-[#02c9cd]/20 hover:from-[#02c9cd]/10 hover:to-white transition-all duration-300 shadow-md"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FaTimes className="w-5 h-5 md:w-6 md:h-6 text-[#02c9cd]" />
                        ) : (
                            <FaBars className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu - Border removed */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? ' opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="pt-2 pb-4 px-2 bg-linear-to-b from-white via-[#c5eeed]/30 to-white rounded-b-2xl shadow-xl">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-4 py-3 my-1 text-black font-medium rounded-xl group transform transition-all duration-200 hover:bg-linear-to-r hover:from-[#c5eeed]/40 hover:to-white"
                                style={{
                                    animationDelay: isOpen ? `${index * 80}ms` : '0ms',
                                    animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                                }}
                            >
                                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#c5eeed] to-[#02c9cd]/10 group-hover:from-[#02c9cd]/20 group-hover:to-[#c5eeed] transition-all duration-300 mr-3">
                                    {React.cloneElement(item.icon, { className: "text-[#02c9cd] w-4 h-4 md:w-5 md:h-5" })}
                                </div>
                                <span className="text-base md:text-lg font-semibold group-hover:text-[#02a8cc] transition-colors duration-300">
                                    {item.name}
                                </span>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <div className="w-1.5 h-1.5 bg-linear-to-r from-[#02c9cd] to-[#02a8cc] rounded-full"></div>
                                </div>
                            </Link>
                        ))}

                        {/* Contact CTA */}
                        <div className="mt-4 px-3">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-3 px-6 text-center bg-linear-to-r from-[#02c9cd] via-[#02a8cc] to-[#02c9cd] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Free Demo Classes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;