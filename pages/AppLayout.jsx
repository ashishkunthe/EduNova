import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu toggle

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-wide text-emerald-600"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            EduNova
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {[
              "Exams",
              "Programs",
              "Scholarships",
              "Test-series",
              "Study-material",
            ].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={({ isActive }) =>
                  `relative font-medium text-lg transition ${
                    isActive
                      ? "text-emerald-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-emerald-600"
                      : "hover:text-emerald-500"
                  }`
                }
              >
                {path.replace("-", " ")}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-white shadow-md absolute top-16 left-0 w-full py-4">
            {[
              "Exams",
              "Programs",
              "Scholarships",
              "Test-series",
              "Study-material",
            ].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className="block px-6 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {path.replace("-", " ")}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AppLayout;
