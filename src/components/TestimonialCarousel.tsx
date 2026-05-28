import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { LucideIcon } from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

export const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <div className="max-w-4xl mx-auto relative px-4">
      <div className="absolute top-2 left-6 text-[120px] font-serif text-brand-orange/5 leading-none select-none pointer-events-none font-extrabold">
        “
      </div>

      <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-12 border border-neutral-100 shadow-xl shadow-neutral-100/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Stars */}
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: current.rating }).map((_, i) => (
                <LucideIcon key={i} name="Star" size={18} className="fill-current text-brand-amber animate-pulse" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl font-medium text-neutral-800 leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Client Profile */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 text-base font-display">
                    {current.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
                    {current.role} at{" "}
                    <span className="text-brand-orange font-semibold">
                      {current.company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100 font-mono">
                <LucideIcon name="ShieldCheck" size={14} className="text-emerald-600" />
                <span>Verified Project Partner</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-3 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-white hover:bg-neutral-100 text-neutral-800 hover:text-brand-orange rounded-xl border border-neutral-100 shadow-md transition-all duration-300 cursor-pointer"
          aria-label="Previous Testimonial"
        >
          <LucideIcon name="ChevronLeft" size={20} />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-1.5 px-4 font-mono text-xs text-neutral-400">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-brand-orange w-6" : "bg-neutral-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 bg-white hover:bg-neutral-100 text-neutral-800 hover:text-brand-orange rounded-xl border border-neutral-100 shadow-md transition-all duration-300 cursor-pointer"
          aria-label="Next Testimonial"
        >
          <LucideIcon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
};
