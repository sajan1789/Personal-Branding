import React from 'react';

// Array of event objects
const events = [
  {
    id: 1,
    title: "Summer Gala",
    date: "2025-06-15",
    location: "Miami, FL",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    description:
      "An unforgettable evening of music, dance, and celebration.",
  },
  // You can add more events if needed
];

const EventHero = () => {
  const event = events[0];

  return (
    <div className="relative h-[150px] w-full overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Full-width image with increased height */}
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full  object-cover"
      />
      {/* Overlay with gradient and enhanced text effects, without backdrop-blur */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          {event.title}
        </h1>
        <div className="mt-2 flex items-center text-white text-sm">
          {/* Calendar Icon */}
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="mt-1 flex items-center text-white text-sm">
          {/* Location Icon */}
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c0 2.209-1.79 4-4 4H5v2h3c1.657 0 3 1.343 3 3h2c0-1.657 1.343-3 3-3h3v-2h-3c-2.21 0-4-1.791-4-4z"
            ></path>
          </svg>
          <span>{event.location}</span>
        </div>
        <p className="mt-3 text-white text-base">{event.description}</p>
      </div>
    </div>
  );
};

export default EventHero;
