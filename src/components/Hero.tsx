import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../store/store";

const Hero = () => {
  const { t } = useTranslation();
  const { fetchHero, getLocalizedContent, hero, loading, error } =
    useAppStore();

  useEffect(() => {
    fetchHero();
  }, [fetchHero]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Error: {error}
      </div>
    );

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Background Pattern - gold terrazzo pattern on dark background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          //   style={{
          //     backgroundImage: "url('/images/hero/hero-bg.svg')",
          //   }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="flex max-w-2xl flex-col items-start gap-6">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="from-primary-500 to-primary-300 block bg-gradient-to-r bg-clip-text text-transparent">
                {getLocalizedContent(hero, "headline")
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}
              </span>
              <span className="from-primary-500 to-primary-300 block bg-gradient-to-r bg-clip-text text-transparent">
                {getLocalizedContent(hero, "headline")
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </span>
            </h1>
            {/* <span className="block bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                Timeless Terrazzo for
              </span>
              <span className="block bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                Modern Spaces
              </span> */}
            <p className="text-xl leading-8 text-gray-400">
              {getLocalizedContent(hero, "subheading")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                to="/contact"
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {t("hero.getQuote")}
              </Button>
              <Button
                as={Link}
                to="/projects"
                size="lg"
                color="light"
                className="border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {t("hero.viewWork")}
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-[450px] w-[450px] overflow-hidden rounded-full border-8 border-gray-800 shadow-xl">
              <img
                src="/images/logo.svg"
                alt="Kinsons Terrazzo Logo"
                className="h-full w-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-gray-50 dark:text-gray-800"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,234.7C672,256,768,256,864,234.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
