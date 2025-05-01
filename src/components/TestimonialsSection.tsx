import { useEffect } from "react";
import { Card, Carousel } from "flowbite-react";
import { useAppStore } from "../store/store";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const {
    testimonials,
    testimonialsSection,
    fetchTestimonials,
    loading,
    error,
    getLocalizedContent,
  } = useAppStore();

  // Fetch testimonials on component mount and when language changes
  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials, i18n.language]);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${
          index < rating
            ? "text-yellow-300"
            : "text-gray-300 dark:text-gray-500"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const path = location.pathname;
  const isTestimonialsPage =
    path === "/testimonials" || path === "/testimonials";

  // Show loading state
  if (loading) {
    return (
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="border-t-primary-600 h-12 w-12 animate-spin rounded-full border-4 border-gray-300"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // If no testimonials, don't render the section
  if (!testimonials) {
    return null;
  }

  // Don't show on testimonials page
  // if (isTestimonialsPage) {
  //   return null;
  // }

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {getLocalizedContent(testimonialsSection, "headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {getLocalizedContent(testimonialsSection, "subheading")}
          </p>
        </div>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            indicators={true}
            slideInterval={7000}
            leftControl={
              <button className="rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            rightControl={
              <button className="rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <Card className="h-full overflow-hidden border-none shadow-lg">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex">
                        {renderStars(testimonial?.rating)}
                      </div>
                      <p className="mb-6 text-lg text-gray-600 italic dark:text-gray-300">
                        "{getLocalizedContent(testimonial, "testimonial")}"
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 h-16 w-16 overflow-hidden rounded-lg">
                        <img
                          src={
                            testimonial?.image ||
                            "/images/testimonials/testimonial1.svg"
                          }
                          alt={getLocalizedContent(testimonial, "client_name")}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {getLocalizedContent(testimonial, "client_name")}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {getLocalizedContent(testimonial, "position")}
                          {testimonial?.company && (
                            <span>
                              , {getLocalizedContent(testimonial, "company")}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {!isTestimonialsPage && (
          <div className="mt-12 text-center">
            <a
              href="/testimonials"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center font-medium"
            >
              <span>
                {getLocalizedContent(testimonialsSection, "read_more")}
              </span>
              <svg
                className="ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
