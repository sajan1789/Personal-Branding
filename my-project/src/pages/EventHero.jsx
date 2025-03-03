// EventBanner.jsx
import React from 'react';

const EventBanner = () => {
  const event = {
    title: "Tech Conference 2023",
    description: "Join us for an exciting day of technology talks and workshops.",
    date: "Dec 15, 2023",
    time: "9:00 AM",
    location: "Silicon Valley",
image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D"  };

  return (
    <div className="w-full h-[150px] bg-gray-100">
      <div className="w-full h-full bg-white shadow-lg overflow-hidden relative group">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-6 text-white animate-fadeIn">
          {/* Left Side - Title and Description */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-1 animate-slideUp">
              {event.title}
            </h1>
            <p className="text-sm animate-slideUp animation-delay-200">
              {event.description}
            </p>
          </div>

          {/* Right Side - Details */}
          <div className="flex items-center space-x-6">
            <div className="text-sm animate-slideUp animation-delay-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </div>
            </div>
            <div className="text-sm animate-slideUp animation-delay-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
            </div>
            <button className="px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 animate-slideUp animation-delay-500">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;