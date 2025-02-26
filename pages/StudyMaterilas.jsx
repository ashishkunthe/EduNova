function StudyMaterials() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Study Materials
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Access high-quality study materials to boost your preparation.
      </p>

      {/* Why Use Our Study Materials? */}
      <div className="bg-gray-100 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Why Choose Our Study Materials?
        </h2>
        <ul className="list-disc text-gray-700 text-lg max-w-3xl mx-auto space-y-3 px-6">
          <li>Curated by subject matter experts.</li>
          <li>Covers syllabus for major competitive exams.</li>
          <li>Includes PDFs, video lectures, and practice questions.</li>
          <li>Regularly updated with the latest content.</li>
          <li>Free and premium resources available.</li>
        </ul>
      </div>

      {/* Types of Study Materials */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          What We Offer
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              E-Books & PDFs
            </h3>
            <p className="text-gray-600">
              Download topic-wise notes and reference books.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Video Lectures
            </h3>
            <p className="text-gray-600">
              Learn from expert teachers with easy-to-follow videos.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Practice Question Banks
            </h3>
            <p className="text-gray-600">
              Solve MCQs, previous year papers, and mock tests.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Formula Sheets
            </h3>
            <p className="text-gray-600">
              Quick revision notes for important concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
          What Students Say
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          "The study materials were a game-changer for my JEE preparation! The
          formula sheets saved me so much time."
          <br />-{" "}
          <span className="font-semibold">Priya Mehta, JEE Aspirant</span>
        </p>
      </div>

      {/* FAQs */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Are these materials free?
            </h3>
            <p className="text-gray-600">
              Yes! We provide both free and premium study materials.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Can I download the PDFs?
            </h3>
            <p className="text-gray-600">
              Absolutely! You can download and access them anytime.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              How often is the content updated?
            </h3>
            <p className="text-gray-600">
              We update our materials regularly to keep up with exam patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Start Learning Now!
        </h3>
        <p className="text-gray-600 mt-2">
          Download study materials and get ahead in your preparation.
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition">
          Explore Materials
        </button>
      </div>
    </div>
  );
}

export default StudyMaterials;
