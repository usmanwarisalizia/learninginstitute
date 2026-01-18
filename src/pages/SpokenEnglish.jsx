import React from 'react';
import SPOKENENGLISH from '/src/assets/SPOKENENGLISH/SPOKENENGLISH.jpeg';

const SpokenEnglish = () => {
  const learningPoints = [
    {
      title: "Express Your Ideas and Emotions:",
      description: "Learn how to use the English language effectively to convey your thoughts, emotions, and opinions with clarity and confidence. Practice real-life scenarios to articulate your ideas fluently."
    },
    {
      title: "Construct Complete and Meaningful Sentences:",
      description: "Understand basic sentence structures and learn to form grammatically correct sentences. Engage in exercises to build sentences that are coherent and impactful."
    },
    {
      title: "Elementary-Level Vocabulary:",
      description: "Enhance your vocabulary with essential words and phrases for everyday use. Learn the meanings, pronunciations, and proper usage of common words."
    },
    {
      title: "Colloquial Expressions for Social Interactions:",
      description: "Get familiar with informal expressions and idiomatic phrases commonly used in casual conversations. Practice how to greet, compliment, and engage in small talk with ease."
    },
    {
      title: "Pronunciation and Intonation:",
      description: "Develop clear and understandable pronunciation to improve your spoken English. Practice stress and intonation to make your speech sound natural."
    },
    {
      title: "Listening and Speaking Practice:",
      description: "Participate in role-play, group discussions, and storytelling to improve listening and speaking abilities. Gain confidence by engaging in one-on-one interactions with the instructor."
    },
    {
      title: "Common Mistakes to Avoid:",
      description: "Identify and correct frequent errors made by learners, such as misuse of tenses and articles. Develop accuracy and fluency in spoken English."
    },
    {
      title: "Basic Grammar Concepts:",
      description: "Learn essential grammar topics such as subject-verb agreement, prepositions, and conjunctions. Apply these rules during practice sessions to build a strong foundation."
    }
  ];

  const benefits = [
    "Interactive Learning: Engage in fun, interactive activities that make learning enjoyable and memorable.",
    "Practical Application: Focus on real-world scenarios like ordering food, giving directions, and introducing yourself.",
    "Expert Guidance: Learn from experienced instructors who are dedicated to helping you succeed.",
    "Personalized Feedback: Receive constructive feedback to track your progress and address your specific challenges."
  ];

  const targetAudience = [
    "Beginners aiming to build basic spoken English skills.",
    "Students preparing for academic or professional environments.",
    "Anyone looking to enhance their confidence in everyday conversations.",
    "Start your journey toward fluent and confident communication in English today!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c5eeed] via-white to-[#c5eeed] py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
            SPOKEN ENGLISH
          </h1>
          <div className="w-24 h-1 bg-[#1a237e] mx-auto mb-6"></div>
          <p className="text-2xl font-semibold text-[#3949ab] mb-2">
            Welcome to Our Spoken English Course!
          </p>
        </div>

        {/* Image Section - Full width */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={SPOKENENGLISH}
              alt="Spoken English Class at Learning Sphere Institute"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Content Section - Same width as image */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

            {/* Introduction */}
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                This course is tailored for beginners who aim to improve their communication skills in English. Whether you're a student, professional, or someone looking to gain confidence in everyday conversations, this course is designed to make learning practical, engaging, and effective.
              </p>
            </div>

            {/* What You Will Learn Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-8 pb-3 border-b-2 border-[#c5eeed]">
                What You Will Learn
              </h2>
            </div>

            {/* Learning Points - 2 columns on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="group transform transition-all duration-300 hover:translate-x-2 p-5 rounded-lg hover:bg-gray-50 border border-gray-100"
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
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Join Our Course Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-8 pb-3 border-b-2 border-[#c5eeed] text-center">
                Why Join Our Course?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] p-5 rounded-xl border border-green-100 transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Enroll Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-8 pb-3 border-b-2 border-[#c5eeed] text-center">
                Who Should Enroll?
              </h2>
              <div className="bg-gradient-to-r from-[#e3f2fd] to-[#e1f5fe] rounded-xl p-6">
                <ul className="space-y-4">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t-2 border-[#c5eeed]">
              <div className="bg-linear-to-r from-[#c5eeed] to-[#e0f7fa] rounded-xl p-8 text-center">
                <p className="text-gray-800 text-xl font-medium mb-6">
                  For enrolment details and class schedules, contact us now!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-linear-to-r from-[#1a237e] to-[#3949ab] text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg">
                    Enroll Now
                  </button>
                  <button className="bg-linear-to-r from-[#4CAF50] to-[#2E7D32] text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg">
                    Contact Us
                  </button>
                </div>
                <p className="text-gray-700 mt-6 font-medium text-lg">
                  Transform your English speaking skills today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpokenEnglish;