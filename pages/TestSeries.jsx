function TestSeries() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Our Test Series
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Prepare with our expertly designed test series to boost your exam
        performance.
      </p>

      {/* Why Choose Our Test Series? */}
      <div className="bg-gray-100 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Why Choose Our Test Series?
        </h2>
        <ul className="list-disc text-gray-700 text-lg max-w-3xl mx-auto space-y-3 px-6">
          <li>Real exam-like practice tests.</li>
          <li>Detailed performance analysis and reports.</li>
          <li>Subject-wise and full-length tests available.</li>
          <li>Designed by top educators and exam experts.</li>
          <li>Time management and accuracy improvement.</li>
        </ul>
      </div>

      {/* Types of Test Series */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Types of Test Series We Offer
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Full-Length Mock Tests
            </h3>
            <p className="text-gray-600">
              Simulate the real exam environment with our comprehensive mock
              tests.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Subject-Wise Tests
            </h3>
            <p className="text-gray-600">
              Focus on specific subjects to strengthen your weak areas.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Daily Practice Quizzes
            </h3>
            <p className="text-gray-600">
              Quick 10-15 minute tests to maintain daily momentum.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700">
              Previous Year Papers
            </h3>
            <p className="text-gray-600">
              Practice with real past exam papers for better preparation.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
          What Students Say About Our Test Series
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          "This test series helped me build confidence before my JEE exam. The
          mock tests were incredibly accurate!"
          <br />-{" "}
          <span className="font-semibold">Ankit Sharma, JEE Aspirant</span>
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
              How do I enroll for the test series?
            </h3>
            <p className="text-gray-600">
              Click on the "Enroll Now" button below, sign up, and start
              practicing!
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Are the tests available in multiple languages?
            </h3>
            <p className="text-gray-600">
              Yes, our test series is available in English and Hindi.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Will I get detailed performance analysis?
            </h3>
            <p className="text-gray-600">
              Absolutely! You’ll receive a detailed report with strengths and
              areas to improve.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Start Practicing Now!
        </h3>
        <p className="text-gray-600 mt-2">
          Enroll in our test series and improve your scores.
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-800 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default TestSeries;
