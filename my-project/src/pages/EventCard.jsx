import React from 'react';

// Array of event objects
const events = [
  {
    id: 1,
    title: "Summer Gala",
    date: "2025-06-15",
    location: "Miami, FL",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with your event image URL
    description: "Join us for an unforgettable evening of music, dance, and celebration under the stars.",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    date: "2025-09-10",
    location: "San Francisco, CA",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with your event image URL
    description: "A gathering of the brightest minds in technology, innovation, and entrepreneurship.",
  },
  // Add more event objects as needed
];

// Individual event card component
const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
    <img className="w-full h-48 object-cover" src={event.imageUrl} alt={event.title} />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="mt-1 text-gray-600">
        <span className="font-semibold">Location:</span> {event.location}
      </p>
      <p className="mt-3 text-gray-700">{event.description}</p>
    </div>
  </div>
);

// Main component that renders the list of events
const EventList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
