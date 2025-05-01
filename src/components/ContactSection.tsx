import { useState, useEffect, useRef } from "react";
import { Button, TextInput, Textarea, Label } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../store/store";

const ContactSection = () => {
  const { t } = useTranslation();
  const {
    fetchContact,
    contact,
    getLocalizedContent,
    sendContactMessage,
    contactFormSubmitting,
    contactFormResult,
    resetContactFormResult,
    loading,
    error,
  } = useAppStore();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    details: "",
    comment: "",
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  useEffect(() => {
    // Reset the success/error message after 5 seconds
    if (contactFormResult) {
      const timer = setTimeout(() => {
        resetContactFormResult();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [contactFormResult, resetContactFormResult]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      // Limit to 3 files max
      const newFiles = fileList.slice(0, 3);
      setAttachments(newFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the message via the store
    sendContactMessage({
      ...formData,
      attachments,
    });
  };

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
  if (!contact)
    return (
      <div className="flex min-h-screen items-center justify-center">
        No contact information available
      </div>
    );

  // Function to render location with line breaks
  const renderLocation = (location: string) => {
    return location.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < location.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {getLocalizedContent(contact, "headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {getLocalizedContent(contact, "subheading")}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-gray-50 p-8 shadow-md dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              {t("contact.form.title")}
            </h3>

            {contactFormResult && (
              <div
                className={`mb-6 rounded-lg p-4 ${
                  contactFormResult.success
                    ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                    : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {contactFormResult.success ? (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  <span>{contactFormResult.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="full_name">
                        {t("contact.form.fullName")}
                      </Label>
                    </div>
                    <TextInput
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                    </div>
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
                    <div className="mb-2 block">
                      <Label htmlFor="phone_number">
                        {t("contact.form.phone")}
                      </Label>
                    </div>
                    <TextInput
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="subject">
                        {t("contact.form.subject")}
                      </Label>
                    </div>
                    <TextInput
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="details">{t("contact.form.details")}</Label>
                  </div>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Your message details..."
                    required
                    rows={4}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="comment">{t("contact.form.comment")}</Label>
                  </div>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Any additional comments..."
                    rows={2}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="attachments">
                      {t("contact.form.attachments")}
                    </Label>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {t("contact.form.attachmentsHint")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="attachments"
                      onChange={handleFileChange}
                      multiple
                      className="hidden"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                    <Button
                      color="light"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={attachments.length >= 3}
                    >
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      Add Files
                    </Button>

                    {attachments.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded bg-gray-100 p-2 dark:bg-gray-700"
                          >
                            <span className="truncate text-sm">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="ml-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={contactFormSubmitting}
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {contactFormSubmitting
                    ? t("contact.form.submitting")
                    : t("contact.form.submit")}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div>
            <div className="mb-8 rounded-lg bg-gray-50 p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {t("contact.info.title")}
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
                      {t("contact.info.location")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {renderLocation(
                        getLocalizedContent(contact.contact_info, "location"),
                      )}
                    </p>
                  </div>
                </div>

                {contact.phones.map((phone) => (
                  <div key={phone.id} className="flex items-start">
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
                        {getLocalizedContent(phone, "label")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a
                          href={`tel:${phone.number.replace(/\s+/g, "")}`}
                          className="hover:underline"
                        >
                          {phone.number}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

                {contact.emails.map((email) => (
                  <div key={email.id} className="flex items-start">
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
                        {getLocalizedContent(email, "label")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a
                          href={`mailto:${email.email}`}
                          className="hover:underline"
                        >
                          {email.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

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
                      {t("contact.info.businessHours")}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contact.business_hours.map((hours) => (
                        <p key={hours.id}>
                          {getLocalizedContent(hours, "day_range")}:{" "}
                          {getLocalizedContent(hours, "hours")}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 overflow-hidden rounded-lg bg-gray-200 shadow-md dark:bg-gray-700">
              <iframe
                title="Kinsons Terrazzo Location"
                className="h-full w-full border-0"
                src={contact.map_link}
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
