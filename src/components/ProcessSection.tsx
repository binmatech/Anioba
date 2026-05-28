import React, { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { LucideIcon } from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedStepData = PROCESS_STEPS.find((step) => step.stepNumber === activeStep);

  return (
    <div className="space-y-12 select-none">
      {/* Step Buttons (Timeline view) */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connection line helper - flat, pristine */}
        <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-neutral-300 -translate-y-1/2 hidden md:block z-0" />
        
        {/* Absolute Progress Fill line - flat, pristine */}
        <div 
          className="absolute top-1/2 left-4 h-[1px] bg-[#F59E0B] -translate-y-1/2 hidden md:block z-0 transition-all duration-500" 
          style={{ width: `${((activeStep - 1) / (PROCESS_STEPS.length - 1)) * 96}%` }}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
          {PROCESS_STEPS.map((step) => {
            const isCompleted = step.stepNumber < activeStep;
            const isActive = step.stepNumber === activeStep;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className="flex flex-col items-center text-center p-4 rounded-none md:bg-transparent md:hover:bg-transparent transition-all duration-300 md:p-0 group cursor-pointer"
              >
                {/* Rotated Square indicator (blueprint block style) */}
                <div
                  className={`w-10 h-10 flex items-center justify-center font-bold text-xs transition-all duration-300 border rotate-45 ${
                    isActive
                      ? "bg-[#0A0A0A] border-[#0A0A0A] text-[#F59E0B] scale-110"
                      : isCompleted
                      ? "bg-neutral-50 border-[#F59E0B] text-[#F59E0B]"
                      : "bg-white border-neutral-300 text-neutral-400 group-hover:border-neutral-500"
                  }`}
                >
                  <div className="-rotate-45 flex items-center justify-center">
                    {isCompleted ? (
                      <LucideIcon name="Check" size={14} className="stroke-[3]" />
                    ) : (
                      `0${step.stepNumber}`
                    )}
                  </div>
                </div>

                <span
                  className={`mt-6 text-[10px] uppercase font-bold tracking-widest font-mono transition-colors duration-300 ${
                    isActive ? "text-[#F59E0B]" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {step.subtitle}
                </span>

                <span
                  className={`text-xs uppercase tracking-wider font-mono mt-1 hidden md:block transition-all duration-300 ${
                    isActive ? "text-neutral-900 font-bold" : "text-neutral-400 group-hover:text-neutral-900"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Step Detail Box - sharp layout */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {selectedStepData && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-none p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Left Circle graphic */}
              <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-5 bg-neutral-50 text-[#F59E0B] rounded-none mb-3 border border-neutral-250">
                  <LucideIcon name={selectedStepData.iconName} size={32} />
                </div>
                <div className="font-mono text-[9.5px] text-[#F59E0B] uppercase tracking-widest font-bold">
                  Stage {selectedStepData.stepNumber} of 5
                </div>
                <h4 className="text-lg font-extrabold font-display text-neutral-900 mt-1 uppercase tracking-tight leading-tight">
                  {selectedStepData.title}
                </h4>
              </div>

              {/* Right explanation */}
              <div className="md:col-span-9 space-y-4 font-sans">
                <div className="border-l-2 border-[#F59E0B] pl-4">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono block">
                    Technical Implementation Standard
                  </span>
                  <p className="text-sm sm:text-base text-neutral-750 mt-2 leading-relaxed">
                    {selectedStepData.description}
                  </p>
                </div>

                {/* Milestone breakdown bullet points */}
                <div className="pt-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 font-mono mb-2">
                    Verified Stage Deliverables:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-600">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#F59E0B] rotate-45 shrink-0" />
                      <span>Formal feasibility study reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#F59E0B] rotate-45 shrink-0" />
                      <span>Strict cost estimations spreadsheet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#F59E0B] rotate-45 shrink-0" />
                      <span>Signed quality safety checklist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#F59E0B] rotate-45 shrink-0" />
                      <span>Official regulatory hand-over certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
