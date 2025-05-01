import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkThemeToggle, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { languages } from "../i18n";
import { useAppStore } from "../store/store";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();
  const { setLanguage } = useAppStore();

  const { fetchNavData, navData } = useAppStore();

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

  useEffect(() => {
    fetchNavData();
  }, [fetchNavData, i18n.language]);

  // Handle language change
  const changeLanguage = (lang: string) => {
    setLanguage(lang as keyof typeof languages);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.svg"
            className="mr-3 h-12 w-12"
            alt="Kinsons Terrazzo Logo"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              {navData?.nav?.company_name}
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {navData?.nav?.tagline}
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          <DarkThemeToggle className="mr-2" />

          {/* Language Selector */}
          <div className="mr-2 flex">
            {Object.entries(languages).map(([code, langInfo]) => (
              <Button
                key={code}
                size="xs"
                color={i18n.language === code ? "primary" : "gray"}
                onClick={() => changeLanguage(code)}
                className={
                  code === "en"
                    ? "rounded-r-none"
                    : code === "sw"
                      ? "rounded-l-none"
                      : ""
                }
              >
                {langInfo.flag}
              </Button>
            ))}
          </div>

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
            {navData?.nav_links?.map((data: any) => (
              <li>
                <Link
                  to={data?.link}
                  className={`block rounded py-2 pr-4 pl-3 md:bg-transparent md:p-0 ${
                    isActive(data?.link)
                      ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                      : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  }`}
                  aria-current={isActive(data?.link) ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data?.nav_text}
                </Link>
              </li>
            ))}

            {/* <li>
              <Link
                to="/about"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/about")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/services")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.services")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/projects")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.projects")}
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/testimonials")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.testimonials")}
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/blog"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/blog")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.blog")}
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/contact"
                className={`block rounded py-2 pr-4 pl-3 md:p-0 ${
                  isActive("/contact")
                    ? "text-primary-600 md:text-primary-600 dark:text-primary-500 md:dark:text-primary-500"
                    : "md:hover:text-primary-600 md:dark:hover:text-primary-500 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
