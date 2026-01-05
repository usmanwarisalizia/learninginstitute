import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const OurCourses = () => {
    const courses = [
        {
            id: 1,
            title: "IELTS",
            image: "https://alearningsphere.com/assets/images/whatsapp-image-2024-11-11-at-3.43.49-pm-600x1067.jpg",
            description: "Master the IELTS with expert guidance, personalised lessons, and proven strategies to achieve your target score"
        },
        {
            id: 2,
            title: "PTE",
            image: "https://alearningsphere.com/assets/images/12.platinum-pearson-400x377.png",
            description: "Prepare for PTE with tailored lessons, expert tips, and practice tests to boost your score."
        },
        {
            id: 3,
            title: "SPOKEN ENGLISH",
            image: "https://alearningsphere.com/assets/images/download-1-275x183.png",
            description: "Improve your spoken English with practical lessons, fluency practice, and confidence-building activities."
        },
        {
            id: 4,
            title: "DIGITAL SKILLS",
            image: "https://alearningsphere.com/assets/images/623ea04998b0002ff7f13ef2-learn-digital-skills-fast-1200x813.jpg",
            description: "Learn essential digital competencies including software proficiency, online collaboration, and digital literacy."
        },
        {
            id: 5,
            title: "DIGITAL MARKETING",
            image: "https://alearningsphere.com/assets/images/download-1-300x168.jpg",
            description: "Mobirise is an easy website builder. Just drop site elements to your page, add content and style it to look the way you like."
        },
        {
            id: 6,
            title: "GRAPHIC DESIGNING",
            image: "https://alearningsphere.com/assets/images/download-275x183.jpg",
            description: "Create stunning visual content using industry-standard tools and design principles for various media."
        },
        {
            id: 7,
            title: "VIDEO EDITING",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
            description: "Learn professional video editing techniques, effects, and storytelling for engaging multimedia content."
        },
        {
            id: 8,
            title: "WRITING SKILLS",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
            description: "Enhance your writing abilities for professional, academic, and creative purposes with expert guidance."
        },
        {
            id: 9,
            title: "E-COMMERCE",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            description: "Build and manage successful online stores with strategies for marketing, operations, and customer engagement."
        },
    ];

    return (
        <div className="py-12 px-4 md:px-8 lg:px-16 bg-linear-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="bg-linear-to-r from-[#02c9cd] to-[#02a8cc] bg-clip-text text-transparent">Courses</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our wide range of language courses designed to help you succeed in IELTS, PTE, Spoken English, and more.
                    </p>
                </div>

                {/* Swiper Container with Custom Navigation */}
                <div className="relative group">
                    {/* Custom Navigation Buttons - Outside container */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
                        <div className="flex justify-between items-center px-2 md:px-4">
                            {/* Previous Button */}
                            <button className="swiper-button-prev-custom group/prev pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#02c9cd] hover:to-[#02a8cc] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#02c9cd]/40 active:scale-95">
                                <FaChevronLeft className="text-gray-600 group-hover/prev:text-white transition-colors duration-300" size={20} />
                            </button>

                            {/* Next Button */}
                            <button className="swiper-button-next-custom group/next pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#02c9cd] hover:to-[#02a8cc] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#02c9cd]/40 active:scale-95">
                                <FaChevronRight className="text-gray-600 group-hover/next:text-white transition-colors duration-300" size={20} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={600}
                        grabCursor={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className="coursesSwiper px-10 md:px-14"
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id} className="pb-2">
                                <div className="group h-full transform transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-200 hover:shadow-2xl hover:border-[#02a8cc] transition-all duration-300">
                                        {/* Image section */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                                                {course.title}
                                            </h3>

                                            <p className="text-gray-600 flex-grow mb-6 line-clamp-3">
                                                {course.description}
                                            </p>

                                            {/* Learn More Button */}
                                            <button className="group/btn w-full py-3 px-4 bg-gradient-to-r from-[#02c9cd] to-[#02a8cc] text-white font-semibold rounded-xl hover:from-[#02a8cc] hover:to-[#02c9cd] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#02c9cd]/30 active:scale-95">
                                                <span>Learn More</span>
                                                <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Global Styles for Swiper */}
            <style jsx global>{`
                .coursesSwiper {
                    position: relative;
                    padding: 10px 5px 30px 5px !important;
                }
                
                .swiper-button-disabled {
                    opacity: 0.3 !important;
                    cursor: not-allowed !important;
                    transform: translateY(-50%) scale(1) !important;
                    pointer-events: none !important;
                }
                
                .swiper-button-disabled:hover {
                    background: white !important;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                }
                
                .swiper-button-disabled svg {
                    color: #9ca3af !important;
                }
                
                /* Remove default Swiper navigation */
                .coursesSwiper .swiper-button-next,
                .coursesSwiper .swiper-button-prev {
                    display: none !important;
                }
                
                /* Animation for slide change */
                .swiper-slide {
                    transition: opacity 0.3s ease, transform 0.3s ease !important;
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    .coursesSwiper {
                        padding: 10px 0 25px 0 !important;
                    }
                    
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        width: 8px !important;
                        height: 8px !important;
                        opacity: 0.8;
                    }
                    
                    .swiper-button-prev-custom:hover,
                    .swiper-button-next-custom:hover {
                        transform: scale(1.05) !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .coursesSwiper {
                        padding: 10px 0 20px 0 !important;
                    }
                    
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        width: 7px !important;
                        height: 7px !important;
                    }
                    
                    .swiper-button-prev-custom {
                        left: -15px !important;
                    }
                    
                    .swiper-button-next-custom {
                        right: -15px !important;
                    }
                }
                
                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        background: #374151 !important;
                        border-color: #4b5563 !important;
                    }
                    
                    .swiper-button-prev-custom svg,
                    .swiper-button-next-custom svg {
                        color: #d1d5db !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default OurCourses;