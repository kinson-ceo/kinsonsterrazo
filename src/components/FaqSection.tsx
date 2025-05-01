import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { useAppStore } from "../store/store";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const { i18n } = useTranslation();
  const { faqs, fetchFaqs, getLocalizedContent, loading, error } =
    useAppStore();

  // Fetch FAQs on component mount and when language changes
  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs, i18n.language]);

  // Show loading state
  if (loading) {
    return (
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
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
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // If no faqs data, don't render the section
  if (!faqs) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {getLocalizedContent(faqs, "headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {getLocalizedContent(faqs, "subheading")}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion collapseAll>
            {faqs.faqs.map((faq) => (
              <AccordionPanel key={faq.id}>
                <AccordionTitle className="text-lg font-medium">
                  {getLocalizedContent(faq, "question")}
                </AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    {getLocalizedContent(faq, "answer")}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {faqs?.cta_text || "Still have questions? We're here to help."}
          </p>
          <a
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
          >
            {faqs?.cta_button_text || "Contact Us"}
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
