import { useState } from "react";

const examsData = [
  {
    id: 1,
    title: "JEE Main",
    description: "Engineering entrance exam for NITs & IIITs.",
  },
  {
    id: 2,
    title: "JEE Advanced",
    description: "For admission into IITs across India.",
  },
  {
    id: 3,
    title: "NEET UG",
    description: "Medical entrance exam for MBBS & BDS courses.",
  },
  {
    id: 4,
    title: "BITSAT",
    description: "Admission test for BITS Pilani and other campuses.",
  },
  {
    id: 5,
    title: "Olympiads",
    description: "Competitive exams for school students.",
  },
  {
    id: 6,
    title: "NTSE",
    description: "National Talent Search Examination for scholarships.",
  },
  {
    id: 7,
    title: "CUET",
    description: "Common University Entrance Test for UG admissions.",
  },
  {
    id: 8,
    title: "AIIMS MBBS",
    description: "Medical entrance for AIIMS institutes.",
  },
];

const itemsPerPage = 2;

function Exams() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(examsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = examsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-6">
        Exams We Cover
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Explore top competitive exams we prepare students for.
      </p>

      {/* Exams Cards */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl grid sm:grid-cols-2 gap-6">
          {currentItems.map((exam) => (
            <div
              key={exam.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-emerald-700">
                {exam.title}
              </h2>
              <p className="text-gray-600 mt-2 text-lg">{exam.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-5 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 disabled:opacity-50 transition"
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
          className="px-5 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 disabled:opacity-50 transition"
        >
          Next
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Why Choose Us for Exam Preparation?
        </h2>
        <ul className="list-disc text-gray-700 text-lg max-w-3xl mx-auto space-y-3 px-6">
          <li>
            Top-tier faculty with years of experience in competitive exams.
          </li>
          <li>Comprehensive study materials tailored for each exam.</li>
          <li>Regular mock tests and performance tracking.</li>
          <li>Personalized mentorship and doubt-clearing sessions.</li>
          <li>Flexible learning options with online and offline classes.</li>
          <li>Proven track record of success and top rankers.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Start Your Success Journey Today!
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          Join now and take the first step toward your dream college.
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Exams;
