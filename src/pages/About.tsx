const About = () => {
  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            About Kinsons Terrazzo
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            We are dedicated to creating stunning terrazzo surfaces that blend
            beauty with functionality.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2005, Kinsons Terrazzo started as a small family
                business with a passion for craftsmanship and quality. Over the
                years, we've grown into one of the most respected terrazzo
                specialists in the industry, while maintaining our commitment to
                excellence and personalized service.
              </p>
              <p>
                Our journey began when founder Michael Kinsons, a master
                craftsman with over 20 years of experience in terrazzo
                installation, decided to create a company that would preserve
                the traditional terrazzo techniques while embracing modern
                innovations.
              </p>
              <p>
                Today, we're proud to have a team of skilled artisans and
                technicians who share our passion for creating beautiful,
                durable terrazzo surfaces that stand the test of time.
              </p>
            </div>

            <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              At Kinsons Terrazzo, our mission is to create exceptional terrazzo
              surfaces that transform spaces while providing unmatched
              durability and value. We're committed to sustainability,
              innovation, and customer satisfaction in every project we
              undertake.
            </p>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/about/company-history.svg"
                alt="Kinsons Terrazzo History Timeline"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Why Choose Us?
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="text-primary-600 mt-1 mr-2 h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Expertise:</strong> Over 15 years of specialized
                    experience in terrazzo installations.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary-600 mt-1 mr-2 h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Quality:</strong> Premium materials and meticulous
                    craftsmanship in every project.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary-600 mt-1 mr-2 h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Innovation:</strong> Combining traditional
                    techniques with modern technology.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary-600 mt-1 mr-2 h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Sustainability:</strong> Eco-friendly practices and
                    materials for responsible construction.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary-600 mt-1 mr-2 h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Customer Service:</strong> Personalized attention
                    and support throughout your project.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="/images/team/team-member1.svg"
                  alt="Michael Kinsons"
                  className="mx-auto h-64 w-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Michael Kinsons
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Founder & CEO
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                With over 30 years of experience in terrazzo craftsmanship,
                Michael leads our team with passion and expertise.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="/images/team/team-member2.svg"
                  alt="Sarah Mitchell"
                  className="mx-auto h-64 w-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Sarah Mitchell
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Design Director
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Sarah brings her artistic vision and design expertise to create
                stunning custom terrazzo patterns.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="/images/team/team-member3.svg"
                  alt="David Rodriguez"
                  className="mx-auto h-64 w-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                David Rodriguez
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Technical Director
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                David oversees all technical aspects of our projects, ensuring
                the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
