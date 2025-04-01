import { useState } from "react";
import { Button } from "flowbite-react";

// Define project data
const projects = [
  {
    id: 1,
    title: "Modern Office Flooring",
    description:
      "Custom terrazzo flooring for a corporate headquarters in downtown.",
    image: "/kinsonsterrazo/images/projects/project1.svg",
    category: "commercial",
    client: "TechCorp Inc.",
    location: "New York, NY",
  },
  {
    id: 2,
    title: "Luxury Residential Kitchen",
    description:
      "Elegant terrazzo countertops with custom color blend for a high-end residence.",
    image: "/kinsonsterrazo/images/projects/project2.svg",
    category: "residential",
    client: "Private Residence",
    location: "Miami, FL",
  },
  {
    id: 3,
    title: "Hotel Lobby Renovation",
    description:
      "Complete terrazzo restoration and new installation for a historic hotel.",
    image: "/kinsonsterrazo/images/projects/project1.svg",
    category: "commercial",
    client: "Grand Plaza Hotel",
    location: "Chicago, IL",
  },
  {
    id: 4,
    title: "Custom Terrazzo Wall Art",
    description:
      "Artistic terrazzo wall installation featuring custom patterns and vibrant colors.",
    image: "/kinsonsterrazo/images/projects/project2.svg",
    category: "custom",
    client: "Metropolitan Museum",
    location: "San Francisco, CA",
  },
  {
    id: 5,
    title: "Restaurant Flooring",
    description:
      "Durable and stylish terrazzo flooring for a busy upscale restaurant.",
    image: "/kinsonsterrazo/images/projects/project1.svg",
    category: "commercial",
    client: "Fusion Bistro",
    location: "Los Angeles, CA",
  },
  {
    id: 6,
    title: "Modern Bathroom Renovation",
    description:
      "Complete bathroom transformation with terrazzo walls, floors, and countertops.",
    image: "/kinsonsterrazo/images/projects/project2.svg",
    category: "residential",
    client: "Private Residence",
    location: "Boston, MA",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "custom", name: "Custom Designs" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Our Terrazzo Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Browse our portfolio of stunning terrazzo installations. Each
            project showcases our commitment to quality and artistic excellence.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              color={activeCategory === category.id ? "primary" : "light"}
              onClick={() => setActiveCategory(category.id)}
              pill
              className="min-w-28"
            >
              {category.name}
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
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-primary-600 absolute top-0 right-0 m-2 rounded-full px-3 py-1 text-xs font-semibold text-white uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Client:</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                {/* <Button
                  color="light"
                  className="group-hover:bg-primary-50 mt-6 w-full dark:group-hover:bg-gray-600"
                >
                  View Project Details
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" color="primary" href="/kinsonsterrazo/projects" as="a">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
