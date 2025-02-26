import { useState } from "react";

const data = [
  {
    id: 1,
    title: "JEE Advanced",
    description: "Comprehensive course for JEE Advanced aspirants.",
  },
  {
    id: 2,
    title: "NEET UG",
    description: "Complete preparation package for NEET UG students.",
  },
  {
    id: 3,
    title: "Foundation Courses",
    description:
      "Courses for students in classes 6-10 to build a strong foundation.",
  },
  {
    id: 4,
    title: "Olympiad Training",
    description: "Specialized training for national & international Olympiads.",
  },
  {
    id: 5,
    title: "Board Exam Prep",
    description: "Expert guidance for excelling in board exams.",
  },
  {
    id: 6,
    title: "Test Series",
    description: "Regular tests to improve problem-solving skills.",
  },
  {
    id: 7,
    title: "Scholarship Programs",
    description: "Scholarship opportunities for meritorious students.",
  },
  {
    id: 8,
    title: "Crash Courses",
    description: "Short-term courses to boost last-minute preparation.",
  },
];

const itemsPerPage = 1; // Show only ONE card per page

function HomeCards() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItem = data[currentPage - 1]; // Get the current item

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Explore Our Courses
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Choose the best program to enhance your learning journey.
      </p>

      {/* Centered Single Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border border-gray-200 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            {currentItem.title}
          </h2>
          <p className="text-gray-600 mt-3">{currentItem.description}</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-5 py-2 bg-emerald-500 text-white rounded-full disabled:opacity-50 hover:bg-emerald-600 transition"
        >
          Previous
        </button>
        <span className="text-gray-900 font-semibold px-4 py-2">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-5 py-2 bg-emerald-500 text-white rounded-full disabled:opacity-50 hover:bg-emerald-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomeCards;
