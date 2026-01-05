import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaPencilAlt,
    FaHeadphones,
    FaBook,
    FaComments
} from 'react-icons/fa';
import heroimg from '/src/assets/heroimg.JPG';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const skillTextsRef = useRef([]);

    const skills = [
        {
            text: "Writing",
            icon: <FaPencilAlt className="w-6 h-6 md:w-8 md:h-8" />,
            color: "from-blue-400 to-cyan-400"
        },
        {
            text: "Listening",
            icon: <FaHeadphones className="w-6 h-6 md:w-8 md:h-8" />,
            color: "from-purple-400 to-pink-400"
        },
        {
            text: "Reading",
            icon: <FaBook className="w-6 h-6 md:w-8 md:h-8" />,
            color: "from-green-400 to-emerald-400"
        },
        {
            text: "Speaking",
            icon: <FaComments className="w-6 h-6 md:w-8 md:h-8" />,
            color: "from-orange-400 to-red-400"
        }
    ];

    useEffect(() => {
        // Main text animation
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                }
            }
        );

        // Button animation
        gsap.fromTo(
            buttonRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: 0.3,
                ease: "elastic.out(1, 0.5)",
            }
        );

        // Skills animation
        skillTextsRef.current.forEach((item, index) => {
            if (item) {
                gsap.fromTo(item,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                        }
                    }
                );
            }
        });
    }, []);

    // Calculate position for circle layout
    const getCirclePosition = (index, total) => {
        const radius = 120; // Base radius for mobile
        const angle = (index / total) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return {
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
        };
    };

    return (
        <section className="relative w-full  flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">

            {/* Background Image */}
            <div
                ref={imageRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${heroimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto">
                <div className="w-full flex flex-col lg:flex-row items-end gap-8 md:gap-12 lg:gap-16">

                    {/* Left side - Main Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10">
                        <div className="relative">

                            {/* Animated background elements */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-cyan-500/10 blur-lg animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10 blur-lg animate-pulse delay-700"></div>

                            {/* Floating particles */}
                            <div className="absolute top-1/4 -right-2 w-2 h-2 bg-cyan-400/50 rounded-full animate-float"></div>
                            <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-blue-400/50 rounded-full animate-float delay-300"></div>

                            {/* Main Heading */}
                            <h1
                                ref={textRef}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight md:leading-none mb-6 md:mb-8"
                            >
                                <span className="block text-gray-50 mt-2 drop-shadow-lg opacity-0 animate-fadeIn">
                                    Hey!!
                                    <span className="inline-block ml-2 animate-wave">👋</span>
                                </span>
                                <span className="block text-cyan-300 mt-2 drop-shadow-lg opacity-0 animate-fadeIn delay-300 overflow-hidden">
                                    Welcome To Learning Sphere
                                </span>
                            </h1>

                            {/* Enhanced CTA Button */}
                            <button
                                ref={buttonRef}
                                className="group relative flex items-center justify-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 opacity-0 animate-fadeIn delay-500"
                            >
                                <span className="relative z-10 text-base md:text-lg font-semibold transition-all duration-300 group-hover:tracking-wider">
                                    Start Your Journey
                                </span>
                                <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full transition-all duration-300 group-hover:w-3 group-hover:h-3 group-hover:rotate-45"></div>
                                </div>

                                {/* Button gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Button shine effect */}
                                <div className="absolute top-0 -left-12 w-8 h-full bg-white/30 skew-x-12 transition-all duration-700 group-hover:left-[110%]"></div>

                                {/* Button glow effect */}
                                <div className="absolute -inset-1 bg-linear-to-r from-cyan-300 to-blue-300 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </button>
                        </div>
                    </div>



                    {/* Right side - Skills in Circle Layout */}
                    <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-auto order-1 lg:order-2 relative z-10">

                        {/* Mobile/Tablet Circle Layout */}
                        <div className="lg:hidden relative w-full h-full flex items-center justify-center">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                                {skills.map((skill, index) => {
                                    const position = getCirclePosition(index, skills.length);
                                    return (
                                        <div
                                            key={index}
                                            ref={el => skillTextsRef.current[index] = el}
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                            style={position}
                                        >
                                            <div className={`group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br ${skill.color} flex flex-col items-center justify-center p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110`}>

                                                {/* Icon */}
                                                <div className="text-white mb-1">
                                                    {skill.icon}
                                                </div>

                                                {/* Text */}
                                                <span className="text-xs sm:text-sm font-bold text-white text-center leading-tight">
                                                    {skill.text}
                                                </span>

                                                {/* Progress Ring */}
                                                <div className="absolute -bottom-2 w-16 h-2">
                                                    <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-white rounded-full"
                                                            style={{ width: `${75 + (index * 5)}%` }}
                                                        />
                                                    </div>
                                                    <div className="text-[10px] text-white/80 text-center mt-1">
                                                        {75 + (index * 5)}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Center Circle */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="text-sm sm:text-base font-bold text-white text-center">SKILLS</span>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Vertical List Layout */}
                        <div className="hidden lg:flex flex-col justify-center items-center lg:items-end  space-y-6 md:space-y-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    ref={el => skillTextsRef.current[index] = el}
                                    className="group relative w-full max-w-sm lg:max-w-md"
                                >
                                    {/* Skill Card */}
                                    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/40">

                                        {/* Animated background effect */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent  transition-transform duration-1000"></div>

                                        <div className="relative flex items-center gap-4">
                                            {/* Icon */}
                                            <div className={`shrink-0 w-14 h-14 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                                                <div className="text-white">
                                                    {skill.icon}
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-2xl md:text-3xl font-bold text-white">
                                                        {skill.text}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress indicator */}
                                        <div className="relative mt-4">
                                            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                                                    style={{ width: `${75 + (index * 5)}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between mt-1">
                                                <span className="text-xs text-white/60">Progress</span>
                                                <span className="text-xs font-semibold text-white">{75 + (index * 5)}%</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connect line for desktop */}
                                    {index < skills.length - 1 && (
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-linear-to-b from-white/30 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;