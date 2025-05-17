import { useEffect } from "react";
import { Button, Card } from "flowbite-react";
import { useAppStore } from "../store/store";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

// Icons for services
// const serviceIcons = {
//   flooring: (
//     <svg
//       className="text-primary-600 h-8 w-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M19 14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m2-6h10m-10 0h10m-10 0H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-10 0V5a2 2 0 012-2h6a2 2 0 012 2v3"
//       />
//     </svg>
//   ),
//   countertops: (
//     <svg
//       className="text-primary-600 h-8 w-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//       />
//     </svg>
//   ),
//   custom: (
//     <svg
//       className="text-primary-600 h-8 w-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//       />
//     </svg>
//   ),
//   "stairs-walls": (
//     <svg
//       className="text-primary-600 h-8 w-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
//       />
//     </svg>
//   ),
//   default: (
//     <svg
//       className="text-primary-600 h-8 w-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//       />
//     </svg>
//   ),
// };

const ServicesSection = () => {
  const { i18n } = useTranslation();
  const { services, fetchServices, loading, error } =
    useAppStore();

  // Fetch services on component mount and when language changes
  useEffect(() => {
    fetchServices();
  }, [fetchServices, i18n.language]);

  // Get icon for service based on slug
  // const getServiceIcon = (slug: string) => {
  //   return (
  //     serviceIcons[slug as keyof typeof serviceIcons] || serviceIcons.default
  //   );
  // };

  // Show loading state
  if (loading) {
    return (
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Shimmer width="300px" height="40px" className="mx-auto mb-4" />
            <Shimmer width="600px" height="24px" className="mx-auto" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <Shimmer
                    width="64px"
                    height="64px"
                    borderRadius="9999px"
                    className="mb-2"
                  />
                  <Shimmer width="80%" height="28px" />
                  <Shimmer width="100%" height="192px" className="mb-4" />
                  <Shimmer width="100%" height="72px" className="mb-4" />
                  <Shimmer width="120px" height="40px" borderRadius="9999px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // If no services data, don't render
  if (!services) {
    return null;
  }

  // Filter out inactive services
  const activeServices = services.services.filter((service) => service.active);

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {services?.headline || "Our Services"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {services?.subheading ||
              "We offer a wide range of services to meet your needs. From flooring to countertops, we have you covered."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activeServices?.map((service) => (
            <Card
              key={service?.id}
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                {/* <div className="bg-primary-50 mb-2 flex h-16 w-16 items-center justify-center rounded-full dark:bg-gray-700">
                  {getServiceIcon(service.slug)}
                </div> */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {service?.title || "Service"}
                </h3>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <img
                    alt={service?.title || "Service"}
                    src={service?.featured_image}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback image if the real image doesn't load
                      e.currentTarget.src = "/images/services/custom.svg";
                    }}
                  />
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {service?.subtitle || "Service subtitle"}
                </p>
                <Link to={`/services/${service.slug}`}>
                  <Button
                    color="light"
                    className="group text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-auto inline-flex items-center"
                    pill
                  >
                    <span>{service?.button_text || "Learn More"}</span>
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
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
