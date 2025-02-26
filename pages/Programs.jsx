import { useState } from "react";

const programsData = [
  {
    id: 1,
    title: "JEE Preparation",
    description: "Comprehensive coaching for JEE Main & Advanced.",
  },
  {
    id: 2,
    title: "NEET Coaching",
    description: "Specialized medical entrance preparation for NEET UG.",
  },
  {
    id: 3,
    title: "Foundation Program",
    description: "Early preparation for students of classes 6-10.",
  },
  {
    id: 4,
    title: "Olympiad Courses",
    description: "Training for national & international Olympiads.",
  },
  {
    id: 5,
    title: "Crash Courses",
    description: "Short-term booster programs for last-minute preparation.",
  },
  {
    id: 6,
    title: "Scholarship Programs",
    description: "Exclusive programs for meritorious students.",
  },
  {
    id: 7,
    title: "Test Series",
    description: "Regular test series to improve problem-solving skills.",
  },
  {
    id: 8,
    title: "Board Exam Prep",
    description: "Special courses to excel in school board exams.",
  },
];

const itemsPerPage = 2;

function Programs() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(programsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = programsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-6">
        Our Programs
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Explore our wide range of programs designed to help students succeed.
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl grid sm:grid-cols-2 gap-6">
          {currentItems.map((program) => (
            <div
              key={program.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-emerald-700">
                {program.title}
              </h2>
              <p className="text-gray-600 mt-2 text-lg">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition disabled:opacity-50"
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
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Why Choose Our Programs?
        </h2>
        <ul className="list-disc text-gray-700 text-lg max-w-3xl mx-auto space-y-3 px-6">
          <li>
            Expert faculty with years of experience in competitive exam
            coaching.
          </li>
          <li>Comprehensive study material and regular mock tests.</li>
          <li>Personalized doubt-solving sessions and mentor support.</li>
          <li>
            Flexible learning options including online and offline batches.
          </li>
          <li>Proven track record of top ranks and successful students.</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Start Your Journey With Us!
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          Enroll now and take the first step towards success.
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Programs;
