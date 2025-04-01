import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

// Define FAQ data
const faqs = [
  {
    id: 1,
    question: "What is terrazzo?",
    answer:
      "Terrazzo is a composite material consisting of chips of marble, quartz, granite, glass, or other suitable material, poured with a cementitious or epoxy binder. Once cured, it's ground and polished to a smooth surface, creating a durable and decorative finish for floors, countertops, and other surfaces.",
  },
  {
    id: 2,
    question: "How durable is terrazzo flooring?",
    answer:
      "Terrazzo is exceptionally durable and can last for decades with proper care. It's resistant to scratches, stains, water damage, and heavy foot traffic, making it ideal for both residential and commercial spaces. Many historic buildings with terrazzo floors installed over 100 years ago still maintain their beauty today.",
  },
  {
    id: 3,
    question: "Is terrazzo environmentally friendly?",
    answer:
      "Yes, terrazzo is considered an environmentally friendly option. It can be made using recycled materials like glass, marble, or granite chips. Additionally, terrazzo is a long-lasting material that doesn't need to be replaced frequently, reducing waste. At Kinsons Terrazzo, we prioritize sustainable practices and offer eco-friendly terrazzo options.",
  },
  {
    id: 4,
    question: "How do I maintain terrazzo surfaces?",
    answer:
      "Terrazzo is relatively low-maintenance. For daily cleaning, simply sweep or vacuum to remove debris, then mop with a neutral pH cleaner specifically formulated for terrazzo. Avoid acidic or abrasive cleaners that can damage the surface. For long-term maintenance, periodic professional resealing can help maintain the terrazzo's luster and protection.",
  },
  {
    id: 5,
    question: "Can terrazzo be installed outdoors?",
    answer:
      "Yes, terrazzo can be installed outdoors with proper considerations for climate and environment. For outdoor applications, we typically recommend using epoxy terrazzo with aggregates and materials specifically selected to withstand temperature changes, UV exposure, and moisture. Our team can provide guidance on the best terrazzo systems for your specific outdoor project.",
  },
  {
    id: 6,
    question: "How long does terrazzo installation take?",
    answer:
      "The installation timeline varies depending on the project size, complexity, and type of terrazzo system. Generally, a standard residential project might take 1-2 weeks, while larger commercial projects can take several weeks to complete. The process includes surface preparation, pouring or applying the terrazzo, curing time, grinding, and polishing. Our team provides detailed timelines during the consultation phase.",
  },
  {
    id: 7,
    question: "Can terrazzo be installed over existing floors?",
    answer:
      "In many cases, terrazzo can be installed over existing floors if they're stable, clean, and properly prepared. This approach, known as thin-set terrazzo, can save time and resources compared to complete removal. However, a thorough assessment of the existing substrate is necessary to determine suitability. Our experts will evaluate your specific situation during the consultation.",
  },
  {
    id: 8,
    question: "What color and design options are available for terrazzo?",
    answer:
      "Terrazzo offers virtually unlimited design possibilities. You can customize the background color, aggregate types, sizes, and colors to achieve your desired aesthetic. From traditional speckled patterns to intricate designs with decorative divider strips, terrazzo can be tailored to complement any interior style. We offer comprehensive design services to help you visualize and realize your terrazzo vision.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about terrazzo surfaces and our
            services.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion collapseAll>
            {faqs.map((faq) => (
              <AccordionPanel key={faq.id}>
                <AccordionTitle className="text-lg font-medium">
                  {faq.question}
                </AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
          >
            Contact Us
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
