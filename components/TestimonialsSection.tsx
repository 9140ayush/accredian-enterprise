"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/mock";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1 bg-blue-900/60 text-blue-300 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-700/50 mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Trusted by India&apos;s fastest-growing companies.
          </h2>
          <p className="text-lg text-slate-400">
            Hear from L&amp;D leaders and CHROs who transformed their organizations.
          </p>
        </motion.div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-500/50 absolute top-6 right-6" />

              {/* Quote Text */}
              <blockquote className="text-slate-300 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-700/60">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-5"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-slate-300 leading-relaxed flex-1">
              &ldquo;{testimonialsData[activeIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-700/60">
              <div
                className={`w-10 h-10 rounded-full ${testimonialsData[activeIndex].avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {testimonialsData[activeIndex].initials}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {testimonialsData[activeIndex].name}
                </p>
                <p className="text-xs text-slate-400">
                  {testimonialsData[activeIndex].title} · {testimonialsData[activeIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? "bg-blue-500 w-5" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Company Logos Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-10 border-t border-slate-700/50"
        >
          {["Razorpay", "PhonePe", "Infosys BPM", "Swiggy", "Meesho", "HDFC Bank"].map(
            (company) => (
              <span
                key={company}
                className="text-slate-500 font-semibold text-sm hover:text-slate-300 transition-colors cursor-default"
              >
                {company}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
