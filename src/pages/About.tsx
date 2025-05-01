import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../store/store";

const About = () => {
  const { t } = useTranslation();
  const { fetchAbout, getLocalizedContent, about, loading, error } =
    useAppStore();

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Error: {error}
      </div>
    );
  if (!about)
    return (
      <div className="flex min-h-screen items-center justify-center">
        No data available
      </div>
    );

  // Function to render paragraphs from text with newlines
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            {getLocalizedContent(about, "headline")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {getLocalizedContent(about, "subheading")}
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              {t("about.ourStory")}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {renderParagraphs(getLocalizedContent(about, "our_story"))}
            </div>

            <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              {t("about.ourMission")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {getLocalizedContent(about, "our_mission")}
            </p>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/kinsonsterrazzo/images/about/company-history.svg"
                alt="Kinsons Terrazzo History Timeline"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {"about.whyChooseUs"}
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {about.why_choose_us.map((reason) => (
                  <li key={reason.id} className="flex items-start">
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
                      <strong>{getLocalizedContent(reason, "name")}:</strong>{" "}
                      {getLocalizedContent(reason, "description")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t("about.meetOurTeam")}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.our_team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src={
                      member.profile_picture ||
                      `/kinsonsterrazzo/images/team/team-member${member.id}.svg`
                    }
                    alt={member.full_name}
                    className="mx-auto h-64 w-64 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.full_name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  {getLocalizedContent(member, "title")}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {getLocalizedContent(member, "description")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
