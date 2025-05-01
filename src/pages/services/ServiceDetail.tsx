import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppStore } from "../../store/store";
import { useTranslation } from "react-i18next";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const { service, fetchService, getLocalizedContent, loading, error } =
    useAppStore();

  useEffect(() => {
    if (slug) {
      fetchService(slug);
    }
  }, [fetchService, slug, i18n.language]);

  // Create SVG component from string if available
  const renderIcon = (iconString?: string) => {
    if (!iconString) return null;
    return <div dangerouslySetInnerHTML={{ __html: iconString }} />;
  };

  // Show loading state
  if (loading) {
    return (
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="border-t-primary-600 h-12 w-12 animate-spin rounded-full border-4 border-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  // If no service data, don't render
  if (!service) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {getLocalizedContent(service, "title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            {getLocalizedContent(service, "subtitle")}
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] md:aspect-[24/9]">
            <img
              src={service?.featured_image}
              alt={getLocalizedContent(service, "title")}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "/kinsonsterrazzo/images/services/custom.svg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                {getLocalizedContent(service, "banner_heading")}
              </h2>
              <p className="text-lg text-gray-200 sm:text-xl">
                {getLocalizedContent(service, "banner_subheading")}
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        {(service.intro_title || service.intro_content) && (
          <div className="mb-16">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              {service.intro_title && (
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  {getLocalizedContent(service, "intro_title")}
                </h2>
              )}
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {getLocalizedContent(service, "intro_content")}
              </p>
            </div>
          </div>
        )}

        {/* Benefits/Features Section */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {getLocalizedContent(service, "benefits_title")}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="mb-4 flex items-center">
                    <div className="bg-primary-100 dark:bg-primary-900 mr-4 rounded-full p-3">
                      <svg
                        className="text-primary-600 dark:text-primary-400 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {getLocalizedContent(benefit, "title")}
                    </h3>
                  </div>
                  <p className="ml-14 text-base text-gray-600 dark:text-gray-300">
                    {getLocalizedContent(benefit, "description")}
                  </p>
                </div>
              ))}
            </div>

            {/* Features Section */}
            {service.features && service.features.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                  {getLocalizedContent(service, "features_title")}
                </h2>

                <div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-900">
                  <div className="grid gap-8 md:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature.id} className="flex">
                        <div className="text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0">
                          {renderIcon(feature.icon)}
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            {getLocalizedContent(feature, "title")}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300">
                            {getLocalizedContent(feature, "description")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Gallery Section */}
        {service.gallery_items && service.gallery_items.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {getLocalizedContent(service, "gallery_title")}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
              {getLocalizedContent(service, "gallery_description")}
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {service.gallery_items.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={getLocalizedContent(item, "alt")}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {getLocalizedContent(item, "alt")}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {getLocalizedContent(item, "description")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        {service.process_steps && service.process_steps.length > 0 && (
          <div className="mb-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {getLocalizedContent(service, "process_title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.process_steps.map((step) => (
                <div
                  key={step.id}
                  className="relative rounded-lg bg-gray-50 p-6 shadow-md transition-transform hover:scale-[1.02] dark:bg-gray-700"
                >
                  <div className="bg-primary-100 dark:bg-primary-800 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <span className="text-primary-600 dark:text-primary-200 text-lg font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {getLocalizedContent(step, "title")}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {getLocalizedContent(step, "description")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications Section */}
        {service.applications && service.applications.length > 0 && (
          <div className="mb-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {getLocalizedContent(service, "applications_title")}
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
              {getLocalizedContent(service, "applications_description")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {service.applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-primary-50 hover:bg-primary-100 flex flex-col items-center rounded-lg p-4 text-center text-gray-800 shadow transition-all dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  {app.icon && (
                    <div className="text-primary-600 dark:text-primary-400 mb-2 h-10 w-10">
                      {renderIcon(app.icon)}
                    </div>
                  )}
                  <span className="text-base font-medium">
                    {getLocalizedContent(app, "name")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
