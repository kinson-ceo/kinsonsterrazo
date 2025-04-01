import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return path !== "/" && location.pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/kinsonsterrazo" className="flex items-center">
          <img
            src="/kinsonsterrazo/images/logo.svg"
            className="mr-3 h-12 w-12"
            alt="Kinsons Terrazzo Logo"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              Kinsons Terrazzo
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Floors that endure the test of time
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          <DarkThemeToggle className="mr-2" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <Link
                to="/kinsonsterrazo"
                className={`block rounded py-2 pr-4 pl-3 md:bg-transparent md:p-0 ${
                  isActive("/kinsonsterrazo")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                aria-current={isActive("/kinsonsterrazo") ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/kinsonsterrazo/about"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/about")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/kinsonsterrazo/services"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/services")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/kinsonsterrazo/projects"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/projects")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/kinsonsterrazo/testimonials"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/testimonials")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            {/* <li>
              <Link
                to="/kinsonsterrazo/blog"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/blog")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                to="/kinsonsterrazo/contact"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/kinsonsterrazo/contact")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
