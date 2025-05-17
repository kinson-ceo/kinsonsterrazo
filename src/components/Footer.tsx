import { Link } from "react-router-dom";
// import { Footer as FlowbiteFooter } from "flowbite-react";
import { useEffect } from "react";
import { useAppStore } from "../store/store";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
  const { footerData, fetchFooterData, navData } =
    useAppStore();

  useEffect(() => {
    fetchFooterData();
  }, [fetchFooterData]);

  // Function to get the icon component dynamically
  const getIconComponent = (iconName: string) => {
    // @ts-expect-error - This is safe as we're using a known set of icons from react-icons/fa
    return FaIcons[iconName] || null;
  };

  if (!footerData) {
    return null; // Or a loading state
  }

  return (
    <div className="bg-gray-50 p-10 dark:bg-gray-900">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="/images/logo.svg"
                className="mr-3 h-12 w-12"
                alt="Kinsons Terrazzo Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                  {navData?.nav?.company_name}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {navData?.nav?.tagline}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-400">
              {footerData?.footer?.note}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {footerData.footer_link_sections.map((section) => (
              <div key={section.id}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section?.title}
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.id} className="mb-4">
                      <Link to={link.url} className="hover:underline">
                        {link?.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
            {navData?.nav?.company_name}™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {footerData.social_media_links.map((social) => {
              const IconComponent = getIconComponent(social?.icon);
              return IconComponent ? (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
