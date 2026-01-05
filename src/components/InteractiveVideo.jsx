import React, { useState, useRef } from 'react';

const InteractiveVideo = () => {
    // The specific YouTube video URL
    const videoUrl = "https://youtu.be/dw8wME3ks7U?si=k0hf_DDzUgk9t6Yt";

    // Function to extract the YouTube video ID from various URL formats
    const getYouTubeId = (url) => {
        // This regex handles various YouTube URL formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    // State for video controls
    const [playbackRate, setPlaybackRate] = useState(1);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Reference for the container (for fullscreen functionality)
    const containerRef = useRef(null);

    // Playback speed options
    const playbackRates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

    // Function to handle fullscreen toggle
    const toggleFullscreen = () => {
        const element = containerRef.current;

        if (!isFullscreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    // Handle fullscreen change events
    const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };

    // Listen for fullscreen change events
    React.useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div className="bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Video Container */}
                <div
                    ref={containerRef}
                    className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
                >
                    {/* Responsive Video Wrapper */}
                    <div className="relative aspect-video">
                        {/* YouTube Embed */}
                        <iframe
                            src={embedUrl}
                            title="IELTS/PTE Preparation Class - Dream English Education"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>

                        {/* Custom Control Overlay */}
                        {showControls && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    {/* Video Title */}
                                    <div className="text-white">
                                        <h3 className="font-semibold text-sm md:text-base line-clamp-1">
                                            Join my class for IELTS/PTE Preparation | Individual attention | In-depth lectures on IELTS Reading
                                        </h3>
                                        <p className="text-xs text-gray-300 mt-1">Dream English Education • 2,171 views • Aug 20, 2024</p>
                                    </div>

                                    {/* Control Buttons */}
                                    <div className="flex items-center gap-2">
                                        {/* Playback Speed Selector */}
                                        <div className="relative group">
                                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-sm font-medium transition-colors flex items-center gap-1">
                                                <span>{playbackRate}x</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                                                <div className="bg-gray-800 rounded-lg shadow-xl p-2 min-w-[120px]">
                                                    <div className="text-xs text-gray-400 px-2 py-1">Playback Speed</div>
                                                    {playbackRates.map((rate) => (
                                                        <button
                                                            key={rate}
                                                            onClick={() => setPlaybackRate(rate)}
                                                            className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${playbackRate === rate
                                                                    ? 'bg-blue-600 text-white'
                                                                    : 'text-gray-300 hover:bg-gray-700'
                                                                }`}
                                                        >
                                                            {rate}x {rate === 1 && 'Normal'}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fullscreen Toggle */}
                                        <button
                                            onClick={toggleFullscreen}
                                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 transition-colors"
                                            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                                        >
                                            {isFullscreen ? (
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 9a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1H5zm10 0a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1h-4zM5 14a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1H5zm10 0a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Toggle Controls Button */}
                        <button
                            onClick={() => setShowControls(!showControls)}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors"
                            aria-label={showControls ? "Hide controls" : "Show controls"}
                        >
                            {showControls ? (
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Video Info Card */}
                <div className="mt-6 bg-white rounded-xl shadow-lg p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                IELTS/PTE Preparation Class
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Featuring individual attention and in-depth lectures on IELTS Reading strategies.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    IELTS Reading
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Individual Attention
                                </span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                    PTE Preparation
                                </span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                    In-depth Lectures
                                </span>
                            </div>
                        </div>
                        <div className="md:text-right">
                            <div className="text-3xl font-bold text-gray-800">2,171</div>
                            <div className="text-gray-600">views</div>
                            <a
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveVideo;