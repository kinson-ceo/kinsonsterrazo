import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useAppStore } from "../store/store";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const {
    projectSection,
    projectCategories,
    projectList,
    fetchProjectSection,
    fetchProjectCategories,
    fetchProjects,
    loading,
    error,
    getLocalizedContent,
  } = useAppStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchProjectSection();
    fetchProjectCategories();
    fetchProjects();
  }, [
    fetchProjectSection,
    fetchProjectCategories,
    fetchProjects,
    i18n.language,
  ]);

  const filteredProjects =
    activeCategory === "all"
      ? projectList
      : projectList.filter((project) =>
          project.categories.some((cat) => cat.slug === activeCategory),
        );

  if (loading) {
    return (
      <div className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="border-t-primary-600 h-12 w-12 animate-spin rounded-full border-4 border-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  const path = location.pathname;
  const isProjectsPage =
    path === "/projects" || path === "/kinsonsterrazzo/projects";

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {projectSection
              ? getLocalizedContent(projectSection, "headline")
              : "Our Terrazzo Projects"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {projectSection
              ? getLocalizedContent(projectSection, "subheading")
              : "Browse our portfolio of stunning terrazzo installations. Each project showcases our commitment to quality and artistic excellence."}
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <Button
            color={activeCategory === "all" ? "primary" : "light"}
            onClick={() => setActiveCategory("all")}
            pill
            className="min-w-28"
          >
            All Projects
          </Button>
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              color={activeCategory === category.slug ? "primary" : "light"}
              onClick={() => setActiveCategory(category.slug)}
              pill
              className="min-w-28"
            >
              {getLocalizedContent(category, "name")}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-700"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project?.image ?? project?.featured_image ?? undefined}
                  alt={getLocalizedContent(project, "title")}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-primary-600 absolute top-0 right-0 m-2 rounded-full px-3 py-1 text-xs font-semibold text-white uppercase">
                  {project.categories[0]
                    ? getLocalizedContent(project.categories[0], "name")
                    : "Project"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {getLocalizedContent(project, "title")}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {getLocalizedContent(project, "description")}
                </p>
                <Button
                  color="light"
                  className="group-hover:bg-primary-50 mt-6 w-full dark:group-hover:bg-gray-600"
                  href={`/kinsonsterrazzo/projects/${project.slug}`}
                >
                  {getLocalizedContent(project, "button_text")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!isProjectsPage && (
          <div className="mt-12 text-center">
            <a
              href="/kinsonsterrazzo/projects"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center font-medium"
            >
              <span>
                {getLocalizedContent(projectSection, "view_all_button")}
              </span>
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
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
