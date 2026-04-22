"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { statsData } from "@/data/mock";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useTransform(springValue, (v) => Math.round(v).toLocaleString());

  if (isInView) {
    motionValue.set(value);
  }

  return (
    <div ref={ref} className="flex items-end gap-0">
      <motion.span className="text-4xl sm:text-5xl font-extrabold text-blue-400">
        {displayValue}
      </motion.span>
      <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-0.5">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="bg-slate-900 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
            By the Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Impact that speaks for itself
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center px-4 py-8 relative ${
                i < statsData.length - 1
                  ? "lg:border-r lg:border-slate-700"
                  : ""
              } ${
                i % 2 === 0 && i < statsData.length - 2
                  ? "border-b border-slate-700 md:border-b-0"
                  : ""
              } ${
                i % 3 !== 2 && i < statsData.length - 1
                  ? "md:border-r md:border-slate-700 lg:border-r-0"
                  : ""
              }`}
            >
              <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-slate-400 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
