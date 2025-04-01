// Define benefits data
const benefits = [
  {
    id: 1,
    title: "Exceptional Durability",
    description:
      "Terrazzo is renowned for its longevity and resistance to wear, often lasting for decades with minimal maintenance required.",
    icon: (
      <svg
        className="text-primary-600 h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Stunning Aesthetics",
    description:
      "The terrazzo blend of stone, marble, and glass aggregates creates unique, customizable patterns that enhance any space.",
    icon: (
      <svg
        className="text-primary-600 h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Eco-Friendly",
    description:
      "Our terrazzo solutions use recycled materials and sustainable practices to create an environmentally friendly flooring option.",
    icon: (
      <svg
        className="text-primary-600 h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Low Maintenance",
    description:
      "Terrazzo requires minimal upkeep compared to other flooring options, saving time and money over its lifespan.",
    icon: (
      <svg
        className="text-primary-600 h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Why Choose Terrazzo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Discover the exceptional benefits that make terrazzo the preferred
            choice for timeless elegance and functionality.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-primary-50 flex h-16 w-16 items-center justify-center rounded-full dark:bg-gray-800">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 mt-16 rounded-lg p-8 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="md:w-2/3">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Bespoke Terrazzo Solutions for Every Space
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At Kinsons Terrazzo, we combine traditional craftsmanship with
                modern technology to create terrazzo surfaces that stand the
                test of time. From concept to completion, our team ensures a
                seamless experience and stunning results.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex justify-center">
                <img
                  src="/kinsonsterrazo/images/terrazzo-craft.svg"
                  alt="Terrazzo Craftsmanship"
                  className="h-64 w-auto rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
