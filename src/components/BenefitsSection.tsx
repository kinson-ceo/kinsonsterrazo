import { useEffect } from "react";
import { useAppStore } from "../store/store";
// import { useTranslation } from "react-i18next";
import IconRenderer from "./IconRenderer";

const BenefitsSection = () => {
  // const { i18n } = useTranslation();
  const { benefits, fetchBenefits, getLocalizedContent, loading, error } =
    useAppStore();

  // Fetch benefits on component mount and when language changes
  useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);

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

  // If no benefits data, don't render the section
  if (!benefits) {
    return null;
  }

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {getLocalizedContent(benefits, "headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {getLocalizedContent(benefits, "subheading")}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {benefits.benefits.map((benefit) => (
            <div key={benefit.id} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-primary-50 flex h-16 w-16 items-center justify-center rounded-full dark:bg-gray-800">
                  <IconRenderer
                    iconName={benefit?.svg_icon}
                    size={32}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {getLocalizedContent(benefit, "title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {getLocalizedContent(benefit, "description")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 mt-16 rounded-lg p-8 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="md:w-2/3">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {getLocalizedContent(benefits, "headline2")}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {getLocalizedContent(benefits, "description")}
              </p>
            </div>
            <div className="flex-1">
              <div className="flex justify-center">
                <img
                  src="/kinsonsterrazzo/images/terrazzo-craft.svg"
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
