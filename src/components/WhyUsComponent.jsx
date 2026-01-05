import React from 'react';
import {
    FaCheckCircle,
    FaUsers,
    FaBookOpen,
    FaAward,
} from 'react-icons/fa';

const clipPathShape = {
    clipPath: `polygon(
    0px 16.9336px, 0.20941315px 14.338315752px, 0.8156912px 11.876360336px,
    1.78589205px 9.580675744px, 3.0870736px 7.484203968px,
    4.68629375px 5.619887px, 6.5506104px 4.020666832px,
    8.64708145px 2.719485456px, 10.9427648px 1.749284864px,
    13.40471835px 1.143007048px, 16px 0.933594px,
    calc(100% - 16px) 0.933594px,
    calc(100% - 0px) 16.9336px,
    calc(100% - 0px) calc(100% - 16.066px),
    0px calc(100% - 16.066px)
  )`
};

const WhyUsComponent = () => {
    const features = [
        {
            id: 1,
            icon: <FaAward className="w-8 h-8" />,
            title: "Free Mock Test",
            description:
                "Test Your Skills, know Your Score! Experience real test conditions. Get feedback on your strengths and areas to improve.",
            highlights: [
                "Real test simulation",
                "Detailed feedback report",
                "Score analysis",
                "Time management practice",
            ],
        },
        {
            id: 2,
            icon: <FaBookOpen className="w-8 h-8" />,
            title: "Extra Focus on Reading",
            description:
                "We teach you how to solve IELTS/PTE Reading through Skimming, Scanning, Paraphrasing and Time Management.",
            highlights: [
                "Skimming techniques",
                "Scanning methods",
                "Paraphrasing skills",
                "Time management strategies",
            ],
        },
        {
            id: 3,
            icon: <FaUsers className="w-8 h-8" />,
            title: "Individual Attention",
            description:
                "We provide individual attention, addressing each student's unique needs like grammar, sentence structure and speaking.",
            highlights: [
                "Personalized feedback",
                "Custom study plans",
                "One-on-one sessions",
                "Progress tracking",
            ],
        },
    ];

    return (
        <div className="bg-linear-to-br from-gray-50 to-blue-50 p-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Why <span className="text-[#02c9cd]">Us?</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="relative p-0.75 bg-linear-to-r from-[#02c9cd] to-[#02a8cc]"
                            style={clipPathShape}
                        >
                            {/* INNER CARD */}
                            <div
                                className="bg-white h-full p-8"
                                style={clipPathShape}
                            >
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-xl bg-linear-to-r from-[#02c9cd] to-[#02a8cc] text-white">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {feature.description}
                                </p>

                                <ul className="space-y-3">
                                    {feature.highlights.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <FaCheckCircle className="text-[#02c9cd] w-5 h-5 mt-1 mr-3" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyUsComponent;
