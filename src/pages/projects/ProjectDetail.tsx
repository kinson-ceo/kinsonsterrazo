import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppStore } from "../../store/store";
import { useTranslation } from "react-i18next";
import { Carousel } from "flowbite-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const {
    projectDetail,
    fetchProjectDetail,
    loading,
    error,
  } = useAppStore();

  useEffect(() => {
    if (slug) {
      fetchProjectDetail(slug);
    }
  }, [fetchProjectDetail, slug, i18n.language]);

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

  // If no project data, don't render
  if (!projectDetail) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        {/* <nav className="mb-8 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="mx-2 text-gray-400">/</div>
            </li>
            <li className="inline-flex items-center">
              <Link
                to="/projects"
                className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <div className="mx-2 text-gray-400">/</div>
            </li>
            <li>
              <span className="text-gray-600 dark:text-gray-300">
                {getLocalizedContent(projectDetail, "title")}
              </span>
            </li>
          </ol>
        </nav> */}

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {projectDetail?.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            {projectDetail.categories.map((category) => (
              <span
                key={category.id}
                className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium"
              >
                {category?.name}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {projectDetail.featured_image && (
          <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
            <img
              src={projectDetail.featured_image}
              alt={projectDetail?.title}
              className="h-auto w-full object-cover"
              onError={(e) => {
                // Fallback image if the real image doesn't load
                e.currentTarget.src = "/images/projects/project1.svg";
              }}
            />
          </div>
        )}

        {/* Project Overview */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {projectDetail?.description_heading}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none dark:text-gray-300">
              <p>{projectDetail?.description}</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            {/* <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Project Details
            </h3> */}
            <div className="space-y-3">
              {projectDetail.project_details.map((detail) => (
                <div key={detail.id}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {detail?.detail}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {detail?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge and Solution */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {projectDetail?.challenge_heading || "The Challenge"}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none dark:text-gray-300">
              <p>{projectDetail?.challenge}</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {projectDetail?.solution_heading || "Our Solution"}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none dark:text-gray-300">
              <p>{projectDetail?.solution}</p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            {projectDetail?.result_heading || "The Result"}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none dark:text-gray-300">
            <p>{projectDetail?.result}</p>
          </div>
        </div>

        {/* Gallery */}
        {projectDetail.gallery && projectDetail.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Project Gallery
            </h2>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                {projectDetail.gallery.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex h-full items-center justify-center"
                  >
                    <img
                      src={item.image}
                      alt={
                        item?.caption || "Project image"
                      }
                      className="h-full w-full object-cover"
                    />
                    {item.caption && (
                      <div className="absolute bottom-0 w-full bg-black/50 p-4">
                        <p className="text-center text-white">
                          {item?.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}

        {/* Related Projects */}
        {/* {projectDetail.related_projects &&
          projectDetail.related_projects.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Related Projects
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectDetail.related_projects.map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={getLocalizedContent(relatedProject, "title")}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback image if the real image doesn't load
                          e.currentTarget.src =
                            "/images/projects/default.svg";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                        {getLocalizedContent(relatedProject, "title")}
                      </h3>
                      <Link to={`/projects/${relatedProject.slug}`}>
                        <Button color="light" size="sm" className="w-full">
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}

        {/* Call to Action */}
        <div className="bg-primary-50 rounded-lg p-8 text-center dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            {projectDetail?.cta_heading || "Ready to Transform Your Space?"}
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            {projectDetail.cta_subheading ||
              "Let us bring the timeless beauty of terrazzo to your project."}
          </p>
         
          <div className="mt-3 text-center">
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
            >
              {projectDetail?.cta_button_text || "Contact Us"}
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
