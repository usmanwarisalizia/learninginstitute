import React from 'react';
import IELTS from "/src/assets/IELTS/IELTS.jpg";

const Ielts = () => {
    const features = [
        {
            title: "Individual Attention:",
            description: "Benefit from personalized attention in our small class sizes, where experienced instructors provide tailored feedback and guidance, ensuring your success."
        },
        {
            title: "Daily Practice of All 4 Modules:",
            description: "Immerse yourself in daily practice sessions covering all four modules of the IELTS test – Listening, Reading, Writing, and Speaking – fostering a holistic skill set."
        },
        {
            title: "Weekly Mock Tests:",
            description: "Gauge your progress with full-length mock tests every week, replicating real exam conditions. Identify areas for improvement and fine-tune your strategy."
        },
        {
            title: "Practice Tests:",
            description: "Acquaint yourself with the test format through regular practice tests, designed to mimic the actual exam. Enhance your time-management skills for peak performance."
        },
        {
            title: "Reading Improvement Exercises:",
            description: "Elevate your reading skills with targeted exercises focusing on paraphrasing, time management, and skimming & scanning – essential components for success in the IELTS test."
        },
        {
            title: "Special Focus on Test-Taking Skills:",
            description: "Receive specialized training to refine your test-taking skills. Our instructors equip you with effective strategies to tackle various question types with confidence."
        },
        {
            title: "Strategies, Tips & Tricks:",
            description: "Unlock valuable insights with a dedicated focus on strategies, tips, and tricks. Approach each section of the test confidently and maximize your overall performance."
        },
        {
            title: "Student Strengths & Weakness Discussion:",
            description: "Engage in regular discussions with our expert instructors to identify your unique strengths and weaknesses. Benefit from tailored approaches to meet your specific needs."
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-[#c5eeed] via-white to-[#c5eeed] py-8 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
                        IELTS Classes
                    </h1>
                    <div className="w-24 h-1 bg-[#1a237e] mx-auto mb-6"></div>
                </div>

                {/* Image Section - Full width */}
                <div className="mb-10">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src={IELTS}
                            alt="IELTS Classes at Learning Sphere Institute"
                            className="w-full h-auto max-h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Content Section - Same width as image */}
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

                        {/* Introduction */}
                        <div className="mb-10">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                At Learning Sphere Institute, we recognize the paramount importance of achieving your desired IELTS score. Our dedicated team is committed to guiding you through a comprehensive IELTS course, offering individualized attention, targeted practice, and valuable insights to ensure your triumph in the IELTS examination.
                            </p>
                        </div>

                        {/* Key Features Section */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#1a237e] mb-8 pb-3 border-b-2 border-[#c5eeed]">
                                Key Features
                            </h2>
                        </div>

                        {/* Features List - 2 columns on desktop, 1 column on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group transform transition-all duration-300 hover:translate-x-2 p-4 rounded-lg hover:bg-gray-50"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-gradient-to-r from-[#1a237e] to-[#3949ab] rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-base">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-[#1a237e] mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12 pt-8 border-t-2 border-[#c5eeed]">
                            <div className="bg-gradient-to-r from-[#c5eeed] to-[#e0f7fa] rounded-xl p-8 text-center">
                                <p className="text-gray-800 text-xl font-medium mb-6">
                                    Prepare for triumphant success with Learning Sphere Institute – your steadfast companion in achieving IELTS excellence!
                                </p>
                                <button className="bg-gradient-to-r from-[#1a237e] to-[#3949ab] text-white font-bold py-4 px-10 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg">
                                    Enroll Today!
                                </button>
                                <p className="text-gray-700 mt-6 font-medium text-lg">
                                    Commence your journey to IELTS mastery!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ielts;