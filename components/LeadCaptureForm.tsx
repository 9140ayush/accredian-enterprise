"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { leadFormSchema, type LeadFormData } from "@/lib/validations";

const teamSizeOptions = [
  { value: "", label: "Select team size" },
  { value: "1-10", label: "1 – 10 employees" },
  { value: "11-50", label: "11 – 50 employees" },
  { value: "51-200", label: "51 – 200 employees" },
  { value: "201-500", label: "201 – 500 employees" },
  { value: "501-1000", label: "501 – 1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

const benefits = [
  "Free 30-min platform walkthrough with your use case",
  "Custom program recommendation for your industry",
  "Pricing tailored to your team size and scope",
  "No commitment, no spam — just a conversation",
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function LeadCaptureForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-slate-800 text-sm bg-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
      hasError ? "border-red-400 bg-red-50" : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <section
      id="lead-form"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Let&apos;s build your <span className="text-blue-600">learning future</span> together.
          </h2>
          <p className="text-lg text-slate-600">
            Fill in the form and one of our enterprise L&amp;D consultants will reach out within 24
            hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden border border-slate-100"
        >
          {/* Left side — Benefits */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 sm:p-10 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                What you&apos;ll get from this call
              </h3>
              <p className="text-blue-100 text-sm">
                No sales pressure — just expert guidance tailored to your organization.
              </p>
            </div>

            <ul className="space-y-4 flex-1">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-blue-50 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-blue-500/40">
              <p className="text-blue-200 text-xs mb-2">For immediate queries:</p>
              <a
                href="mailto:enterprise@accredian.com"
                className="text-white font-semibold text-sm hover:underline"
              >
                enterprise@accredian.com
              </a>
            </div>

            {/* Decoration */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["200+ Clients", "50K+ Learners", "98% Satisfaction"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — Form */}
          <div className="lg:col-span-3 p-8 sm:p-10">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </h3>
                <p className="text-slate-600 max-w-sm">
                  One of our enterprise L&amp;D consultants will reach out to schedule your free
                  demo session.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
                id="lead-capture-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      {...register("fullName")}
                      placeholder="Priya Sharma"
                      className={inputClass(!!errors.fullName)}
                      autoComplete="name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      {...register("workEmail")}
                      placeholder="priya@company.com"
                      className={inputClass(!!errors.workEmail)}
                      autoComplete="email"
                    />
                    {errors.workEmail && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.workEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    {...register("companyName")}
                    placeholder="Acme Corporation"
                    className={inputClass(!!errors.companyName)}
                    autoComplete="organization"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Team Size */}
                <div>
                  <label
                    htmlFor="teamSize"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Team Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="teamSize"
                    {...register("teamSize")}
                    className={`${inputClass(!!errors.teamSize)} cursor-pointer`}
                  >
                    {teamSizeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.teamSize.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Message{" "}
                    <span className="text-slate-400 font-normal text-xs">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={3}
                    placeholder="Tell us about your learning goals, team size, or any specific programs you're interested in..."
                    className={`${inputClass(false)} resize-none`}
                  />
                </div>

                {/* Error Toast */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-demo-btn"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-200 hover:opacity-90 hover:shadow-blue-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request a Free Demo"
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                  . No spam, ever.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
