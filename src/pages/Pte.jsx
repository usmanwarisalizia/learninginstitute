import React from 'react';
import  PTE from "/src/assets/PTE/PTE.png";

const Pte = () => {
  const features = [
    {
      title: "Comprehensive Module Training:",
      description: "Tailored training for all four PTE modules: Speaking, Writing, Reading, and Listening, with special focus on unique question types like fill-in-the-blanks, re-tell lectures, and describe images."
    },
    {
      title: "Speaking Excellence:",
      description: "Work on fluency, pronunciation, and clarity to excel in tasks like Repeat Sentence and Read Aloud. Receive personalized feedback to improve your speaking skills."
    },
    {
      title: "Writing Mastery:",
      description: "Learn effective strategies for Summarize Written Text and essay writing with focus on grammar, coherence, vocabulary, and proper structure."
    },
    {
      title: "Reading Enhancement:",
      description: "Improve vocabulary organically without traditional lists. Master techniques for Reorder Paragraphs and Reading & Writing Fill-in-the-Blanks with improved comprehension."
    },
    {
      title: "Individualized Attention:",
      description: "Receive personalized feedback to identify strengths and improvement areas in grammar, vocabulary, or pronunciation for targeted development."
    },
    {
      title: "Weekly Mock Tests:",
      description: "Real-time simulated exams that replicate the actual PTE test environment to build confidence, improve time management, and track progress."
    },
    {
      title: "Question Type Familiarity:",
      description: "Become comfortable with every PTE question type through extensive practice and strategic approaches tailored to each format."
    },
    {
      title: "Fast Results:",
      description: "Develop the skills needed to achieve your desired PTE score in the shortest possible time through focused, efficient training methods."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c5eeed] via-white to-[#c5eeed] py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
            PTE CLASSES
          </h1>
          <div className="w-24 h-1 bg-[#1a237e] mx-auto mb-6"></div>
        </div>

        {/* Image Section - Full width */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={PTE}
              alt="PTE Computer Lab at Learning Sphere Institute"
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
                Our PTE course is tailored to help students achieve high scores by mastering the test's four key modules: Speaking, Writing, Reading, and Listening. We provide in-depth training, focusing on the unique features of the PTE test, such as fill-in-the-blanks, re-tell lectures, and describe images, ensuring students are familiar with every question type.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                For Speaking, we work on fluency, pronunciation, and clarity, enabling students to excel in tasks like Repeat Sentence and Read Aloud. In the Writing module, students are guided through effective strategies for writing Summarize Written Text and crafting well-structured essays, focusing on grammar, coherence, and vocabulary.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We put extra emphasis on the Reading module, teaching students to enhance vocabulary organically, without relying on traditional vocabulary lists. Our training covers effective techniques for handling question types like Reorder Paragraphs, and Reading & Writing Fill-in-the-Blanks, while improving comprehension and accuracy.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We provide individualized attention, identifying each student’s strengths and areas for improvement, such as grammar, vocabulary, or pronunciation. Weekly real-time mock tests simulate the actual PTE exam environment, helping students build confidence, improve time management, and assess progress effectively.
              </p>
            </div>

            {/* Key Features Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-8 pb-3 border-b-2 border-[#c5eeed]">
                Course Features
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
                  Our course ensures students not only understand the format of the PTE test but also develop the skills needed to achieve their desired scores in the shortest time possible.
                </p>
                <button className="bg-gradient-to-r from-[#1a237e] to-[#3949ab] text-white font-bold py-4 px-10 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg">
                  Start Your PTE Journey!
                </button>
                <p className="text-gray-700 mt-6 font-medium text-lg">
                  Join Learning Sphere Institute for expert PTE preparation!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pte;