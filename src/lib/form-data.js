export const StartupApplicationForm = {
  title: "Startup Application Form",
  highlight_text: "Startup",
  sub_title: "",
  totalSteps: 9,
  question: [
    {
      question: "Enter your email",
      question_type: "text",
      placeholder: "Your email",
      field_name: "email",
      validation: "email",
      stepTitle: "Contact Information",
      stepDescription: "Let's start with your basic contact details"
    },
    {
      question: "Brand Name",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "brandName",
      validation: "text",
      stepTitle: "Company Details",
      stepDescription: "Tell us about your startup"
    },
    {
      question: "Registered Legal Name",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "legalName",
      validation: "text"
    },
    {
      question: "Founded In",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "foundedIn",
      validation: "year"
    },
    {
      question: "Short brief about the startup",
      question_type: "text",
      placeholder: "Brief description of your startup (max 200 characters)",
      field_name: "briefYourStartup",
      validation: "text",
      maxLength: 200
    },
    {
      question: "Startup domain",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "domain",
      validation: "text"
    },
    {
      question: "Geographical Address",
      question_type: "text",
      placeholder: "Enter your complete address",
      field_name: "address",
      validation: "text",
      isTextarea: true,
      stepTitle: "Company Details",
      stepDescription: "Tell us about your startup"
    },
    {
      question: "Which Stage is Your Startup at?",
      question_type: "mcq",
      options: [
        "IDEA",
        "GROWTH",
        "MVP",
        "SCALING",
        "EARLY_TRACTION",
        "PRE_PRODUCT",
        "PRE_REVENUE",
        "PMF",
      ],
      field_name: "startupStage",
      validation: "text",
      stepTitle: "Startup Stage",
      stepDescription: "Help us understand where your startup is in its journey"
    },
    {
      question: "Website Link",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "website",
      validation: "url",
      stepTitle: "Online Presence",
      stepDescription: "Share your digital footprint with us"
    },
    {
      question: "Your LinkedIn",
      question_type: "text",
      placeholder: "Your answer",
      field_name: "linkedin",
      validation: "url",
      stepTitle: "Final Details",
      stepDescription: "Almost done! Just a few more details"
    },
  ],
};

