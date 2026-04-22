"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { stepsData } from "@/data/mock";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleStep = (id: string) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-100 mb-4">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Live in 14 days.{" "}
            <span className="text-blue-600">Measurable ROI</span> in 90.
          </h2>
          <p className="text-lg text-slate-600">
            Our structured four-step methodology takes you from assessment to measurable outcomes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {stepsData.map((step, i) => {
            const isEven = i % 2 === 1;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                className={`relative`}
              >
                <div
                  className={`bg-white border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-blue-500 shadow-xl shadow-blue-100"
                      : "border-slate-100 shadow-md hover:border-blue-200 hover:shadow-lg"
                  }`}
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-start gap-5">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-lg transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-300"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <button
                          aria-label={isActive ? "Collapse" : "Expand"}
                          className="flex-shrink-0 mt-0.5 text-slate-400 hover:text-blue-600 transition-colors"
                        >
                          {isActive ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.summary}</p>

                      {/* Expandable Detail */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-slate-100">
                              <p className="text-sm text-slate-500 leading-relaxed">
                                {step.detail}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Connector (mobile only) */}
                {i < stepsData.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-px h-6 bg-blue-200" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:opacity-90 transition-all duration-200"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
