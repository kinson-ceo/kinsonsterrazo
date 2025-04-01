import { Button, Card } from "flowbite-react";

// Define the service data
const services = [
  {
    id: 1,
    title: "Terrazzo Flooring",
    description:
      "Durable and elegant terrazzo flooring solutions for residential and commercial spaces. Our flooring combines beauty with longevity.",
    image: "/images/services/flooring.svg",
    icon: (
      <svg
        className="text-primary-600 h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m2-6h10m-10 0h10m-10 0H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-10 0V5a2 2 0 012-2h6a2 2 0 012 2v3"
        />
      </svg>
    ),
    link: "/services/flooring",
  },
  {
    id: 2,
    title: "Terrazzo Countertops",
    description:
      "Premium terrazzo countertops that add sophistication to kitchens and bathrooms. Customized to match your interior design vision.",
    image: "/images/services/countertops.svg",
    icon: (
      <svg
        className="text-primary-600 h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    link: "/services/countertops",
  },
  {
    id: 3,
    title: "Custom Terrazzo Designs",
    description:
      "Bespoke terrazzo solutions tailored to your specific design needs. From artistic installations to unique patterns and colors.",
    image: "/images/services/custom.svg",
    icon: (
      <svg
        className="text-primary-600 h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    link: "/services/custom",
  },
  {
    id: 4,
    title: "Terrazzo Stairs & Walls",
    description:
      "Extend the beauty of terrazzo to stairs, walls and vertical surfaces. Create cohesive designs throughout your space.",
    image: "/images/services/custom.svg", // Reusing custom.svg for now
    icon: (
      <svg
        className="text-primary-600 h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
    ),
    link: "/services/stairs-walls",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Our Terrazzo Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Discover our premium terrazzo solutions crafted with expertise and
            artistic excellence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary-50 mb-2 flex h-16 w-16 items-center justify-center rounded-full dark:bg-gray-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <img
                    alt={service.title}
                    src={service.image}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <Button
                  as="a"
                  href={service.link}
                  className="group text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-auto inline-flex items-center"
                  color="light"
                  pill
                >
                  <span>Learn More</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
