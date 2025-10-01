import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
export const faqData = [
    {
      question: "Do plumbers deal with heating?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
    {
      question: "Do you charge a call out fee?",
      answer:
        "Please contact us for detailed information about our call out fees and pricing structure.",
    },
    {
      question: "How quickly can your company send out an engineer?",
      answer:
        "We typically respond to emergency calls within 2-4 hours during business hours.",
    },
    {
      question: "What should I do if I get a water leak?",
      answer:
        "Immediately turn off the main water supply and contact our emergency helpline for immediate assistance.",
    },
  ];


  export   const footerLinks = {
    ourServices: [
      { name: "Plumbing", href: "#" },
      { name: "Drainage", href: "#" },
      { name: "Bathrooms", href: "#" },
      { name: "Commercial", href: "#" },
    ],
    usefulLinks: [
      { name: "Contact Us", href: "#" },
      { name: "Updates", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Rates", href: "#" },
    ],
    quickLinks: [
      { name: "Customer Services", href: "#" },
      { name: "Updates", href: "#" },
      { name: "Locations", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  };

  export  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  export const contactInfo = [
    { icon: MapPin, text: "1 East Street, London, SE11 9SQ" },
    { icon: Mail, text: "enquiries@londonplus.com" },
    { icon: Phone, text: "020 4327 4474" },
  ];