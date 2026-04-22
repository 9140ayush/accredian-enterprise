"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuresData, type FeatureCategory } from "@/data/mock";

const tabs: FeatureCategory[] = ["All", "Learning", "Analytics", "Integration"];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<FeatureCategory>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    activeTab === "All" ? featuresData : featuresData.filter((f) => f.category === activeTab);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-100 mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Everything your L&amp;D team needs to scale.
          </h2>
          <p className="text-lg text-slate-600">
            From curriculum design to analytics — Accredian Enterprise is the operating system for
            ambitious learning organizations.
          </p>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Feature categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              id={`tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="tabpanel"
        >
          {filtered.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 flex flex-col gap-4 group"
            >
              {/* Popular Badge */}
              {feature.isPopular && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-amber-400 text-white text-xs font-bold rounded-full">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">
                {feature.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>

              {/* Category Tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {feature.category}
                </span>
                <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all duration-200">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
