import HomeCards from "./components/HomeCards";

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-6">
        Welcome to EduNova
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Explore our wide range of courses designed to help students excel in
        competitive exams.
      </p>

      {/* Featured Courses */}
      <HomeCards />

      {/* Upcoming Batches & Enrollment Deadlines */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Upcoming Batches & Enrollment Deadlines
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-emerald-700">
              JEE Advanced 2025
            </h3>
            <p className="text-gray-600 mt-2">Batch Starts: March 15, 2025</p>
            <p className="text-gray-600">Enrollment Deadline: March 10, 2025</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-emerald-700">
              NEET UG 2025
            </h3>
            <p className="text-gray-600 mt-2">Batch Starts: April 5, 2025</p>
            <p className="text-gray-600">Enrollment Deadline: March 30, 2025</p>
          </div>
        </div>
      </div>

      {/* Latest News & Announcements */}
      <div className="mt-12 p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Latest News & Announcements
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-emerald-700">
              📢 JEE Main 2025 Mock Test Released
            </h3>
            <p className="text-gray-600 mt-1">
              Attempt our new mock tests to assess your preparation.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-emerald-700">
              🎉 Scholarship Exam Results Announced
            </h3>
            <p className="text-gray-600 mt-1">
              Check the results of the Excelia Scholarship Test.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-emerald-700">
              📌 How can I enroll in a course?
            </h3>
            <p className="text-gray-600 mt-1">
              You can enroll online through our website or visit our nearest
              center.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-emerald-700">
              📌 Are there scholarships available?
            </h3>
            <p className="text-gray-600 mt-1">
              Yes! We offer scholarships based on merit and need.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Have any questions? Reach out to us!
        </p>
        <p className="text-gray-600 mt-1">
          <strong>Email:</strong> support@excelia.com
        </p>
        <p className="text-gray-600 mt-1">
          <strong>Phone:</strong> +91 99XXXXXX00
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-800 transition">
          Contact Now
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Join EduNova Today!
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          Take the first step towards academic excellence. Enroll now!
        </p>
        <button className="mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-800 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
