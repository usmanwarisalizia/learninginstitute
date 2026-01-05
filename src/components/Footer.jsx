import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaBookOpen,
    FaQuestionCircle,
    FaUsers,
    FaEnvelope,
    FaCopyright,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaTiktok
} from 'react-icons/fa';

const Footer = () => {
    const footerLinks = [
        { id: 1, title: "Classes", icon: <FaBookOpen />, path: "/classes" },
        { id: 2, title: "FAQ", icon: <FaQuestionCircle />, path: "/faq" },
        { id: 3, title: "Team", icon: <FaUsers />, path: "/team" },
        { id: 4, title: "Contacts", icon: <FaEnvelope />, path: "/contacts" },
    ];

    const socialLinks = [
        {
            id: 1,
            icon: <FaWhatsapp />,
            path: "https://api.whatsapp.com/send/?phone=923004712024&text&type=phone_number&app_absent=0",
            color: "hover:text-green-600",
            label: "WhatsApp"
        },
        {
            id: 2,
            icon: <FaFacebookF />,
            path: "https://www.facebook.com/LearningSphere",
            color: "hover:text-blue-600",
            label: "Facebook"
        },
        {
            id: 3,
            icon: <FaInstagram />,
            path: "https://www.instagram.com/learningsphereinstitute/#",
            color: "hover:text-pink-600",
            label: "Instagram"
        },
        {
            id: 4,
            icon: <FaYoutube />,
            path: "https://www.youtube.com/@learningsphereinstitute",
            color: "hover:text-red-600",
            label: "YouTube"
        },
        {
            id: 5,
            icon: <FaTiktok />,
            path: "https://www.tiktok.com/@alearningsphere",
            color: "hover:text-black",
            label: "TikTok"
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 border-t border-gray-200">
            <div className="container mx-auto px-4 py-8 md:py-12">

                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-10">

                    {/* Logo and Description Section */}
                    <div className="flex flex-col items-center lg:items-start max-w-lg">
                        {/* Logo Section */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3 group transform transition-all duration-300 hover:scale-105 mb-6"
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#02c9cd] to-[#02a8cc] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative p-3 bg-white rounded-full shadow-lg">
                                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                        <FaBookOpen className="w-full h-full text-[#02c9cd]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-baseline">
                                <div className="flex items-baseline gap-1 md:gap-2">
                                    <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#02a8cc] via-[#02c9cd] to-[#02a8cc] bg-clip-text text-transparent">
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

                        <p className="text-center lg:text-left text-gray-600 mb-6">
                            Transforming education through innovative learning solutions. Join our community and embark on a journey of knowledge and growth.
                        </p>



                        {/* Social Media Links - LARGER ICONS */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 font-medium text-lg">Follow us:</span>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xl transition-all duration-300 ${social.color} transform hover:-translate-y-1`}
                                        aria-label={social.label}
                                    >
                                        <span className="text-xl md:text-2xl">
                                            {social.icon}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-lg font-bold mb-6 text-center lg:text-left border-b pb-2 border-gray-300">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                                >
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-[#02c9cd] to-[#02a8cc] text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {link.icon}
                                    </div>
                                    <span className="font-semibold text-gray-800 group-hover:text-[#02a8cc] transition-colors duration-300">
                                        {link.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section - CENTERED and LARGER */}
                <div className="pt-8 border-t border-gray-300">
                    <div className="flex flex-col items-center justify-center gap-6">

                        {/* Copyright Section - Centered */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center text-gray-700 mb-2 text-lg">
                                <FaCopyright className="mr-3 text-xl" />
                                <span className="font-semibold text-xl">Copyright 2030 Learning Sphere</span>
                            </div>
                            <div className="text-base text-gray-600 font-medium">
                                All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 bg-linear-to-r from-[#02c9cd] via-[#02a8cc] to-[#02c9cd]"></div>
        </footer>
    );
};

export default Footer;