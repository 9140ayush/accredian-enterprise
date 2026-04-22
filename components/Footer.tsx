"use client";

import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: [
    "Enterprise Learning",
    "Custom Programs",
    "Analytics Dashboard",
    "HR Integrations",
    "Certificates",
  ],
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Leadership",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Case Studies", "Whitepapers", "Webinars", "L&D Playbook", "API Docs"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-base tracking-tight">
                  Accredian
                </span>
                <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
                  Enterprise
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce with
              programs from IITs, IIMs, and global universities.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:enterprise@accredian.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                enterprise@accredian.com
              </a>
              <a
                href="tel:+918888888888"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 88888 88888
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Gurgaon, India
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl border border-blue-800/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                Stay ahead in L&amp;D
              </h4>
              <p className="text-slate-400 text-sm">
                Get the latest insights on enterprise learning, trends, and case studies.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 sm:w-56 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Accredian. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-500 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
