"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, Zap, BarChart3, Star, ArrowRight, Play } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 } },
};

const metrics = [
  { label: "Active Learners", value: "2,847", change: "+12%", positive: true },
  { label: "Avg. Score", value: "91.4", change: "+5.2", positive: true },
  { label: "Completion", value: "96%", change: "+8%", positive: true },
  { label: "YoY Growth", value: "↑ 34%", change: "vs last year", positive: true },
];

const progressItems = [
  { label: "Data Science & AI", pct: 89, color: "bg-blue-500" },
  { label: "Product Management", pct: 76, color: "bg-indigo-500" },
  { label: "Leadership & Strategy", pct: 92, color: "bg-violet-500" },
];

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-violet-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Trusted by 500+ Enterprise Organizations</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Build the Skills
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-blue-600 leading-[1.05] tracking-tight">
                Your Enterprise
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Needs to Win.
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              India&apos;s most trusted enterprise learning platform. Partner with IITs, IIMs, and
              global universities to upskill your teams at scale — with measurable outcomes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#lead-form"
                id="hero-demo-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:opacity-90 transition-all duration-200 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Schedule a Free Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                id="hero-tour-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 text-base shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                See Platform Tour
              </button>
            </motion.div>

            {/* Mini Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "🎓", text: "IIT & IIM certified" },
                { icon: "⚡", text: "Go live in 2 weeks" },
                { icon: "📊", text: "Real-time analytics" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Dashboard Mockup */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-xs font-medium uppercase tracking-widest">
                      Enterprise Dashboard
                    </p>
                    <h3 className="text-white font-bold text-lg mt-0.5">Q4 Learning Report</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      className="bg-slate-50 rounded-2xl p-4 border border-slate-100"
                    >
                      <p className="text-xs text-slate-500 font-medium mb-1">{m.label}</p>
                      <p className="text-xl font-extrabold text-slate-900">{m.value}</p>
                      <span
                        className={`text-xs font-semibold ${
                          m.positive ? "text-emerald-600" : "text-red-500"
                        }`}
                      >
                        {m.change}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    Program Completion
                  </p>
                  {progressItems.map((item, i) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700">{item.label}</span>
                        <span className="font-bold text-slate-900">{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ delay: 0.8 + i * 0.2, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Avatars Row */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex -space-x-2">
                    {avatarColors.map((color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    <span className="font-bold text-slate-900">+2,842</span> learners enrolled
                  </span>
                </div>

                {/* Bottom Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                      <GraduationCap className="w-3.5 h-3.5" />
                      IIT Certified
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs font-semibold text-slate-700">500+ Programs</span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                      <Zap className="w-3.5 h-3.5" />
                      98% Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-amber-400 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
            >
              🏆 Top Rated Platform
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
            >
              ✓ 98% Satisfaction
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
