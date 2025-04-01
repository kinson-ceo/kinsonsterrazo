import { useState, useEffect } from "react";
import { Card } from "flowbite-react";

// Define testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Interior Designer",
    company: "Modern Spaces Design",
    quote:
      "Working with Kinsons Terrazzo has been an absolute pleasure. Their attention to detail and commitment to quality is evident in every project. The terrazzo countertops they installed in our client's home exceeded all expectations.",
    image: "/kinsonsterrazo/images/testimonials/testimonial1.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Project Manager",
    company: "Chen Construction Group",
    quote:
      "We've partnered with Kinsons Terrazzo on multiple commercial projects, and they consistently deliver outstanding results. Their team's expertise and professionalism have made them our go-to terrazzo specialists.",
    image: "/kinsonsterrazo/images/testimonials/testimonial1.svg", // Reusing testimonial1.svg
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Homeowner",
    company: "",
    quote:
      "I couldn't be happier with my kitchen renovation. The terrazzo countertops are not only beautiful but incredibly durable. The installation team was professional, clean, and finished the job ahead of schedule.",
    image: "/kinsonsterrazo/images/testimonials/testimonial1.svg", // Reusing testimonial1.svg
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Architect",
    company: "Wilson & Associates",
    quote:
      "Kinsons Terrazzo brings an exceptional level of craftsmanship to every project. Their ability to execute complex designs while maintaining the highest quality standards sets them apart in the industry.",
    image: "/kinsonsterrazo/images/testimonials/testimonial1.svg", // Reusing testimonial1.svg
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Restaurant Owner",
    company: "Coastal Bistro",
    quote:
      "Our restaurant floors needed to be both beautiful and extremely durable. Kinsons delivered on both fronts with their terrazzo flooring. Three years later, it still looks brand new despite heavy foot traffic.",
    image: "/kinsonsterrazo/images/testimonials/testimonial1.svg", // Reusing testimonial1.svg
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

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

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience with Kinsons Terrazzo.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full overflow-hidden border-none shadow-lg">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="mb-4 flex">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="mb-6 text-lg text-gray-600 italic dark:text-gray-300">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 h-16 w-16 overflow-hidden rounded-lg">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.title}
                            {testimonial.company && (
                              <span>, {testimonial.company}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 h-3 w-3 rounded-full ${
                  activeSlide === index
                    ? "bg-primary-600"
                    : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
            onClick={() => {
              setActiveSlide((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1,
              );
              setAutoplay(false);
              setTimeout(() => setAutoplay(true), 10000);
            }}
            aria-label="Previous testimonial"
          >
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
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
            onClick={() => {
              setActiveSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1,
              );
              setAutoplay(false);
              setTimeout(() => setAutoplay(true), 10000);
            }}
            aria-label="Next testimonial"
          >
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
        </div>

        <div className="mt-12 text-center">
          <a
            href="/kinsonsterrazo/testimonials"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center font-medium"
          >
            <span>Read more testimonials</span>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
