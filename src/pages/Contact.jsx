import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "0333 8258053",
      link: "tel:03338258053"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "WhatsApp",
      value: "0300 4712024",
      link: "https://wa.me/923004712024"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "info@learningsphere.com",
      link: "mailto:info@learningsphere.com"
    }
  ];

  const address = {
    main: "8S, 23 Bukhari Market, Near Naqsha Stop Link Wahdat Rd, Lahore, Punjab 54600",
    hours: "11:00AM - 9:00PM"
  };


  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27209.11667521652!2d74.314491!3d31.520326000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa42af01661fac7b9%3A0x79b0f952048bb61d!2sLearning%20Sphere%20Institute!5e0!3m2!1sen!2sus!4v1767466519449!5m2!1sen!2sus";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c5eeed] via-white to-[#c5eeed] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#1a237e] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full  px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#1a237e] to-[#3949ab] hover:from-[#3949ab] hover:to-[#1a237e] transform hover:scale-[1.02]'
                  } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c5eeed] to-[#1a237e] rounded-full flex items-center justify-center mb-4">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1a237e] to-[#3949ab] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-2">{address.main}</p>
                  <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Working hours: {address.hours}</span>
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">Learning Sphere Institute</h4>
                    <p className="text-gray-600 text-sm">8S, 23 Bukhari Market, Link Wahdat Rd, Lahore</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-xl">★★★★★</span>
                      <span className="ml-2 font-bold text-gray-800">4.9</span>
                    </div>
                    <p className="text-gray-600 text-sm">63 reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">Find Us on Map</h3>
                <p className="text-gray-600 mt-1">View larger map for detailed directions</p>
              </div>

              {/* Google Maps Iframe */}
              <div className="h-64 md:h-80 w-full">
                <iframe
                  src={mapIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Learning Sphere Institute Location Map"
                  className="rounded-b-2xl"
                />
              </div>

             
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;