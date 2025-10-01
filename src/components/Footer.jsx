import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { footerLinks } from "@/lib/Data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "1 East Street, London, SE11 9SQ" },
    { icon: Mail, text: "enquiries@londonplus.com" },
    { icon: Phone, text: "020 4327 4474" },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[120px] pt-[120px] pb-[60px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8  mb-12 lg:mb-16">
          {/* Business Logo & Social Links */}
          <div className="lg:col-span-1">
            <h3 className="text-[#000000] lg:text-[30px] font-[700] mb-4">
              Business Logo
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-[#1a1a1a] text-base font-[600] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.ourServices.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#4a4a4a] text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[#1a1a1a] text-base font-[600] mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#4a4a4a] text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[#1a1a1a] text-base font-[600] mb-4">
              Customer Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#4a4a4a] text-sm hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-[#1a1a1a] text-base font-[600] mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <item.icon className="w-4 h-4 text-[#4a4a4a] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a4a4a] text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#6b6b6b]">
            <p>© Plumbing Plus. All Rights Reserved {currentYear}</p>
            <p>Website by M-Advertise Web Creative</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
