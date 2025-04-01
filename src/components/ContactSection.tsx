import { useState } from "react";
import { Button, TextInput, Textarea } from "flowbite-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have questions or ready to start your terrazzo project? Get in touch
            with our team of experts.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-gray-50 p-8 shadow-md dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Send Us a Message
            </h3>

            {submitSuccess && (
              <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/50 dark:text-green-200">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
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
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/50 dark:text-red-200">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{submitError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <TextInput
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <TextInput
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <TextInput
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave a comment..."
                    required
                    rows={6}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div>
            <div className="mb-8 rounded-lg bg-gray-50 p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 mr-3 flex h-10 w-10 items-center justify-center rounded-full dark:bg-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Terrazzo Way, Suite 101
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 mr-3 flex h-10 w-10 items-center justify-center rounded-full dark:bg-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+14155551234" className="hover:underline">
                        +1 (415) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 mr-3 flex h-10 w-10 items-center justify-center rounded-full dark:bg-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="mailto:info@kinsonsterrazzo.com"
                        className="hover:underline"
                      >
                        info@kinsonsterrazzo.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 mr-3 flex h-10 w-10 items-center justify-center rounded-full dark:bg-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 overflow-hidden rounded-lg bg-gray-200 shadow-md dark:bg-gray-700">
              <iframe
                title="Kinsons Terrazzo Location"
                className="h-full w-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.455823265876!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1630175174744"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
