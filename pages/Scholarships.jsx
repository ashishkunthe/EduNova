import { useState } from "react";

const scholarshipsData = [
  {
    id: 1,
    title: "Merit-Based Scholarship",
    description: "Awarded to top-performing students.",
  },
  {
    id: 2,
    title: "Need-Based Scholarship",
    description: "Financial aid for students in need.",
  },
  {
    id: 3,
    title: "Sports Scholarship",
    description: "For students excelling in sports.",
  },
  {
    id: 4,
    title: "Research Grants",
    description: "Support for students involved in research.",
  },
  {
    id: 5,
    title: "Minority Scholarships",
    description: "Financial aid for minority students.",
  },
  {
    id: 6,
    title: "Women in STEM Scholarship",
    description: "Encouraging women in science & tech.",
  },
];

const itemsPerPage = 1;

function Scholarships() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(scholarshipsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = scholarshipsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-6">
        Scholarships We Offer
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Explore various scholarships to support your academic journey.
      </p>

      {/* Scholarship Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {currentItems.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition text-center min-h-[180px]"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {scholarship.title}
              </h2>
              <p className="text-gray-600 mt-2 text-lg">
                {scholarship.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-900 font-semibold text-lg">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* Why Apply for Scholarships? */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Why Apply for Our Scholarships?
        </h2>
        <ul className="list-disc text-gray-700 text-lg max-w-3xl mx-auto space-y-3 px-6">
          <li>Reduce financial burden and focus on studies.</li>
          <li>Gain recognition for academic & extracurricular achievements.</li>
          <li>Access mentorship and career support programs.</li>
          <li>Improve your resume and future job prospects.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Start Your Scholarship Journey!
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          Apply now and take a step towards a bright future.
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Scholarships;
