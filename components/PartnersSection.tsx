"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { partnersData, partnerCategoryColors } from "@/data/mock";

// Duplicate for seamless marquee
const row1 = [...partnersData.slice(0, 8), ...partnersData.slice(0, 8)];
const row2 = [...partnersData.slice(8), ...partnersData.slice(8)];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-100 mb-4">
            Academic & Industry Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Built on world-class institutions.
          </h2>
          <p className="text-lg text-slate-600">
            Our programs are co-designed and certified by India&apos;s most prestigious institutions
            and leading global companies.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 — Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 overflow-hidden"
      >
        <div className="marquee-track">
          {row1.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className={`flex-shrink-0 mx-2 px-4 py-2.5 rounded-xl border font-semibold text-sm flex items-center gap-2 whitespace-nowrap ${partnerCategoryColors[partner.category]}`}
            >
              <span className="text-xs font-bold opacity-70">{partner.shortName}</span>
              <span className="hidden sm:block">{partner.fullName}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marquee Row 2 — Right (reverse) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="overflow-hidden"
      >
        <div className="marquee-track-reverse">
          {row2.map((partner, i) => (
            <div
              key={`${partner.id}-rev-${i}`}
              className={`flex-shrink-0 mx-2 px-4 py-2.5 rounded-xl border font-semibold text-sm flex items-center gap-2 whitespace-nowrap ${partnerCategoryColors[partner.category]}`}
            >
              <span className="text-xs font-bold opacity-70">{partner.shortName}</span>
              <span className="hidden sm:block">{partner.fullName}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Legend & Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Category Legend */}
          <div className="flex flex-wrap gap-3 justify-center">
            {(["IIT", "IIM", "Global", "Industry"] as const).map((cat) => (
              <span
                key={cat}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${partnerCategoryColors[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="w-px h-6 bg-slate-200 hidden sm:block" />

          {/* Stat Badges */}
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-md">
              50+ Partner Institutions
            </div>
            <div className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl shadow-md">
              200+ Certified Programs
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
