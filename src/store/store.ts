import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import i18n from "../i18n";
import { languages } from "../i18n";

// Validate environment variables
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
if (!BACKEND_URL) {
  console.error("VITE_BACKEND_URL is not defined in environment variables");
}

interface Hero {
  id: number;
  headline: string;
  headline_en: string;
  headline_sw: string;
  subheading: string;
  subheading_en: string;
  subheading_sw: string;
  logo: string | null;
  created_at: string;
  updated_at: string;
}

interface TeamMember {
  id: number;
  full_name: string;
  profile_picture: string | null;
  title: string;
  title_en: string;
  title_sw: string;
  description: string;
  description_en: string;
  description_sw: string;
  created_at: string;
  updated_at: string;
}

interface ChooseUsReason {
  id: number;
  name: string;
  name_en: string;
  name_sw: string;
  description: string;
  description_en: string;
  description_sw: string;
  created_at: string;
  updated_at: string;
}

interface About {
  id: number;
  headline: string;
  headline_en: string;
  headline_sw: string;
  subheading: string;
  subheading_en: string;
  subheading_sw: string;
  our_story: string;
  our_story_en: string;
  our_story_sw: string;
  our_mission: string;
  our_mission_en: string;
  our_mission_sw: string;
  why_choose_us: ChooseUsReason[];
  our_team: TeamMember[];
  created_at: string;
  updated_at: string;
}

interface Testimonial {
  id: number;
  client_name: string;
  client_name_en: string;
  client_name_sw: string;
  position: string;
  position_en: string;
  position_sw: string;
  company: string;
  company_en: string;
  company_sw: string;
  testimonial: string;
  testimonial_en: string;
  testimonial_sw: string;
  rating: number;
  image: string | null;
  created_at?: string;
  updated_at?: string;
}

interface TestimonialSection {
  id: number;
  headline: string;
  headline_en: string;
  headline_sw: string;
  subheading: string;
  subheading_en: string;
  subheading_sw: string;
  read_more: string;
  read_more_en: string;
  read_more_sw: string;
  created_at: string;
  updated_at: string;
}

interface ContactInfo {
  id: number;
  location: string;
  location_en: string;
  location_sw: string;
  created_at: string;
  updated_at: string;
}

interface Phone {
  id: number;
  label: string;
  label_en: string;
  label_sw: string;
  number: string;
  created_at: string;
  updated_at: string;
}

interface Email {
  id: number;
  label: string;
  label_en: string;
  label_sw: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface BusinessHours {
  id: number;
  day_range: string;
  day_range_en: string;
  day_range_sw: string;
  hours: string;
  hours_en: string;
  hours_sw: string;
  created_at: string;
  updated_at: string;
}

interface Contact {
  id: number;
  headline: string;
  headline_en: string;
  headline_sw: string;
  subheading: string;
  subheading_en: string;
  subheading_sw: string;
  map_link: string;
  contact_info: ContactInfo;
  phones: Phone[];
  emails: Email[];
  business_hours: BusinessHours[];
  created_at: string;
  updated_at: string;
}

interface ContactFormData {
  full_name: string;
  email: string;
  phone_number: string;
  subject?: string;
  details: string;
  comment?: string;
  attachments?: File[];
}

interface ContactSubmitResult {
  success: boolean;
  message: string;
}

type LanguageCode = keyof typeof languages;

interface Benefit {
  id: number;
  title: string;
  title_en: string;
  title_sw: string;
  description: string;
  description_en: string;
  description_sw: string;
  svg_icon: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface BenefitsSection {
  id: number;
  headline: string;
  headline_en: string;
  headline_sw: string;
  headline2: string;
  headline2_en: string;
  headline2_sw: string;
  description: string;
  description_en: string;
  description_sw: string;
  subheading: string;
  subheading_en: string;
  subheading_sw: string;
  benefits: Benefit[];
  created_at: string;
  updated_at: string;
}

interface Faq {
  id: number;
  question: string;
  question_en?: string;
  question_sw?: string;
  answer: string;
  answer_en?: string;
  answer_sw?: string;
}

interface FaqSection {
  id: number;
  headline: string;
  headline_en?: string;
  headline_sw?: string;
  subheading: string;
  subheading_en?: string;
  subheading_sw?: string;
  cta_text: string;
  cta_text_en?: string;
  cta_text_sw?: string;
  cta_button_text: string;
  cta_button_text_en?: string;
  cta_button_text_sw?: string;
  faqs: Faq[];
}

interface ServiceGalleryItem {
  id: number;
  image: string;
  alt: string;
  alt_en?: string;
  alt_sw?: string;
  description: string;
  description_en?: string;
  description_sw?: string;
}

interface ServiceProcess {
  id: number;
  step: string;
  title: string;
  title_en?: string;
  title_sw?: string;
  description: string;
  description_en?: string;
  description_sw?: string;
}

interface ServiceFeature {
  id: number;
  title: string;
  title_en?: string;
  title_sw?: string;
  description: string;
  description_en?: string;
  description_sw?: string;
  icon?: string;
}

interface ServiceApplication {
  id: number;
  name: string;
  name_en?: string;
  name_sw?: string;
  icon?: string;
}

interface Service {
  id: number;
  slug: string;
  title: string;
  title_en?: string;
  title_sw?: string;
  subtitle: string;
  subtitle_en?: string;
  subtitle_sw?: string;
  featured_image: string;
  banner_heading: string;
  banner_heading_en?: string;
  banner_heading_sw?: string;
  banner_subheading: string;
  banner_subheading_en?: string;
  banner_subheading_sw?: string;
  intro_title: string;
  intro_title_en?: string;
  intro_title_sw?: string;
  intro_content: string;
  intro_content_en?: string;
  intro_content_sw?: string;
  benefits_title: string;
  benefits_title_en?: string;
  benefits_title_sw?: string;
  benefits: ServiceFeature[];
  gallery_title: string;
  gallery_title_en?: string;
  gallery_title_sw?: string;
  gallery_description: string;
  gallery_description_en?: string;
  gallery_description_sw?: string;
  gallery_items: ServiceGalleryItem[];
  process_title: string;
  process_title_en?: string;
  process_title_sw?: string;
  process_steps: ServiceProcess[];
  applications_title: string;
  applications_title_en?: string;
  applications_title_sw?: string;
  applications_description: string;
  applications_description_en?: string;
  applications_description_sw?: string;
  applications: ServiceApplication[];
  features_title: string;
  features_title_en?: string;
  features_title_sw?: string;
  features: ServiceFeature[];
  created_at: string;
  updated_at: string;
}

interface ProjectCategory {
  id: number;
  name: string;
  name_en: string;
  name_sw: string;
  slug: string;
}

interface ProjectGalleryItem {
  id: number;
  project: number;
  image: string;
  caption: string;
  caption_en: string;
  caption_sw: string;
  order: number;
}

interface ProjectSection {
  headline: string;
  subheading: string;
  view_all_button: string;
}

interface ProjectDetails {
  id: number;
  created_at: string;
  updated_at: string;
  detail: string;
  detail_en?: string;
  detail_sw?: string;
  description: string;
  description_en?: string;
  description_sw?: string;
}

interface Project {
  id: number;
  title: string;
  title_en?: string;
  title_sw?: string;
  slug: string;
  description: string;
  description_en?: string;
  description_sw?: string;
  image: string | null;
  featured_image: string | null;
  button_text: string;
  categories: ProjectCategory[];
  created_at: string;
  updated_at: string;
}

interface ProjectDetail {
  id: number;
  title: string;
  title_en?: string;
  title_sw?: string;
  slug: string;
  description: string;
  description_en?: string;
  description_sw?: string;
  description_heading: string;
  image: string | null;
  featured_image: string | null;
  button_text: string;
  challenge_heading: string;
  challenge: string;
  challenge_en?: string;
  challenge_sw?: string;
  solution_heading: string;
  solution: string;
  solution_en?: string;
  solution_sw?: string;
  result_heading: string;
  result: string;
  result_en?: string;
  result_sw?: string;
  project_details: ProjectDetails[];
  cta_heading: string;
  cta_subheading: string;
  cta_button_text: string;
  gallery: ProjectGalleryItem[];
  categories: ProjectCategory[];
  created_at: string;
  updated_at: string;
}

interface Projects {
  projects: Project[];
  categories: ProjectCategory[];
}

interface ServiceList {
  id: number;
  headline: string;
  headline_en?: string;
  headline_sw?: string;
  subheading: string;
  subheading_en?: string;
  subheading_sw?: string;
  services: ServiceSummary[];
}

interface ServiceSummary {
  id: number;
  title: string;
  title_en?: string;
  title_sw?: string;
  slug: string;
  subtitle: string;
  subtitle_en?: string;
  subtitle_sw?: string;
  featured_image: string;
  active: boolean;
  button_text: string;
}

interface FooterLink {
  id: number;
  text: string;
  text_en: string;
  text_sw: string;
  url: string;
}

interface FooterLinkSection {
  id: number;
  title: string;
  title_en: string;
  title_sw: string;
  links: FooterLink[];
}

interface SocialMediaLink {
  id: number;
  platform: string;
  icon: string;
  url: string;
}

interface FooterData {
  footer: {
    id: number;
    note: string;
    note_en: string;
    note_sw: string;
  };
  footer_link_sections: FooterLinkSection[];
  social_media_links: SocialMediaLink[];
}

interface NavData {
  nav: {
    id: number;
    company_name: string;
    tagline: string;
  };
  nav_links: [
    {
      id: number;
      nav_text: string;
      link: string;
    },
  ];
}

interface AppState {
  hero: Hero | null;
  about: About | null;
  contact: Contact | null;
  testimonials: Testimonial[] | null;
  testimonialsSection: TestimonialSection | null;
  benefits: BenefitsSection | null;
  faqs: FaqSection | null;
  service: Service | null;
  services: ServiceList | null;
  projects: Projects | null;
  project: ProjectDetail | null;
  loading: boolean;
  error: string | null;
  contactFormSubmitting: boolean;
  contactFormResult: ContactSubmitResult | null;
  footerData: FooterData | null;
  navData: NavData | null;

  // Fetch hero data
  fetchHero: () => Promise<void>;

  // Fetch about us data
  fetchAbout: () => Promise<void>;

  // Fetch contact data
  fetchContact: () => Promise<void>;

  // Fetch testimonials data
  fetchTestimonials: () => Promise<void>;

  // Fetch benefits data
  fetchBenefits: () => Promise<void>;

  // Fetch faqs data
  fetchFaqs: () => Promise<void>;

  // Fetch service data
  fetchService: (slug: string) => Promise<void>;

  // Fetch services list
  fetchServices: () => Promise<void>;

  // Fetch project detail data
  fetchProject: (slug: string) => Promise<void>;

  // Send contact form
  sendContactMessage: (formData: ContactFormData) => Promise<void>;

  // Reset contact form result
  resetContactFormResult: () => void;

  // Set language preference
  setLanguage: (lang: LanguageCode) => void;

  // Get localized content based on current language
  getLocalizedContent: <T extends Record<string, any>>(
    obj: T | null,
    field: keyof T,
  ) => string;

  // Project state
  projectSection: ProjectSection | null;
  projectCategories: ProjectCategory[];
  projectList: Project[];
  projectDetail: ProjectDetail | null;

  // Project actions
  fetchProjectSection: () => Promise<void>;
  fetchProjectCategories: () => Promise<void>;
  fetchProjects: (category?: string) => Promise<void>;
  fetchProjectDetail: (slug: string) => Promise<void>;

  // Fetch footer data
  fetchFooterData: () => Promise<void>;
  fetchNavData: () => Promise<void>;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hero: null,
      about: null,
      contact: null,
      testimonials: [],
      testimonialsSection: null,
      benefits: null,
      faqs: null,
      service: null,
      services: null,
      projects: null,
      project: null,
      loading: false,
      error: null,
      contactFormSubmitting: false,
      contactFormResult: null,
      footerData: null,
      navData: null,

      // Project state
      projectSection: null,
      projectCategories: [],
      projectList: [],
      projectDetail: null,

      fetchHero: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/hero/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ hero: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchAbout: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/about/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ about: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchContact: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/contact/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ contact: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchTestimonials: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/testimonials/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({
            testimonials: response?.data?.testimonials,
            testimonialsSection: response?.data?.section,
            loading: false,
          });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchBenefits: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/benefits/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ benefits: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchFaqs: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/faqs/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({
            faqs: Array.isArray(response.data)
              ? response.data[0]
              : response.data,
            loading: false,
          });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchServices: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/service-section/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ services: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchService: async (slug: string) => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/services/${slug}/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ service: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchProjects: async (category?: string) => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const url = category
            ? `${BACKEND_URL}/projects/?categories=${category}`
            : `${BACKEND_URL}/projects/`;
          const response = await axios.get<Project[]>(url, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ projectList: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchProject: async (slug: string) => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/projects/${slug}/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ project: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      sendContactMessage: async (formData: ContactFormData) => {
        try {
          set({
            contactFormSubmitting: true,
            contactFormResult: null,
            error: null,
          });

          // Create form data object for file uploads
          const data = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            if (key === "attachments" && value instanceof Array) {
              // Add each file separately
              value.forEach((file) => {
                data.append(`attachments`, file);
              });
            } else if (value !== undefined && value !== null) {
              data.append(key, value.toString());
            }
          });

          // Get current language from i18next
          const lang = i18n.language as LanguageCode;

          // Send the form data to the API
          const response = await axios.post(
            `${BACKEND_URL}/send-message/`,
            data,
            {
              headers: {
                "Accept-Language": lang,
                "Content-Type": "multipart/form-data",
              },
            },
          );

          set({
            contactFormSubmitting: false,
            contactFormResult: {
              success: true,
              message: response.data.detail,
            },
          });
        } catch (error) {
          set({
            contactFormSubmitting: false,
            contactFormResult: {
              success: false,
              message: axios.isAxiosError(error)
                ? error.message
                : "There was an error sending your message. Please try again.",
            },
          });
        }
      },

      resetContactFormResult: () => {
        set({ contactFormResult: null });
      },

      setLanguage: (lang) => {
        // Change language in i18next
        i18n.changeLanguage(lang);
      },

      getLocalizedContent: (obj, field) => {
        if (!obj) return "";

        // Get current language from i18next
        const lang = i18n.language as LanguageCode;

        // For fields that have language-specific versions
        const langFieldName = `${String(field)}_${lang}`;
        const langField = langFieldName as keyof typeof obj;

        if (langField in obj && typeof obj[langField] === "string") {
          return obj[langField] as string;
        }

        // Fallback to the base field
        return obj[field] as string;
      },

      // Project actions
      fetchProjectSection: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get<ProjectSection>(
            `${BACKEND_URL}/projects-section/`,
            {
              headers: {
                "Accept-Language": lang,
              },
            },
          );
          set({ projectSection: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchProjectCategories: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get<ProjectCategory[]>(
            `${BACKEND_URL}/projects-categories/`,
            {
              headers: {
                "Accept-Language": lang,
              },
            },
          );
          set({ projectCategories: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchProjectDetail: async (slug: string) => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get<ProjectDetail>(
            `${BACKEND_URL}/projects/${slug}/`,
            {
              headers: {
                "Accept-Language": lang,
              },
            },
          );
          set({ projectDetail: response.data, loading: false });
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchFooterData: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/footer/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ footerData: response.data, loading: false });
          console.log(response.data);
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },

      fetchNavData: async () => {
        try {
          set({ loading: true, error: null });
          const lang = i18n.language as LanguageCode;
          const response = await axios.get(`${BACKEND_URL}/nav-section/`, {
            headers: {
              "Accept-Language": lang,
            },
          });
          set({ navData: response.data, loading: false });
          console.log(response.data);
        } catch (error) {
          set({
            error: axios.isAxiosError(error)
              ? error.message
              : "An unknown error occurred",
            loading: false,
          });
        }
      },
    }),

    {
      name: "app-storage",
      partialize: () => ({}),
    },
  ),
);
