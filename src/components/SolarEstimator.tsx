import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";

interface SolarEstimatorProps {
  onEstimatorSubmit: (estimatedSystem: string) => void;
}

export const SolarEstimator: React.FC<SolarEstimatorProps> = ({ onEstimatorSubmit }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(350000);

  // Math models
  const estimatedCapacity = (monthlyBill / 45000).toFixed(1); // kW
  const estimatedPanels = Math.ceil(parseFloat(estimatedCapacity) * 1000 / 440); // 440W panels
  const tenYearSavings = Math.round(monthlyBill * 12 * 10 * 0.88); // 88% electricity replaced
  const co2Prevented = (parseFloat(estimatedCapacity) * 1.1).toFixed(1); // Tons per year

  return (
    <div className="bg-[#111111] text-white rounded-none p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden">
      {/* Visual top accent - sharp, solid Geometric Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B]" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border-l-2 border-[#F59E0B] text-brand-amber text-[10px] font-bold font-mono uppercase tracking-widest mb-3">
              <span className="flex h-1.5 w-1.5 bg-[#F59E0B] rotate-45 animate-ping" />
              <span>Smart Solar Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight uppercase">
              Solar Blueprint & Savings Matrix
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-xl font-sans">
              Get an instant projection of your required solar setup system size based on your current home or factory power expenditures.
            </p>
          </div>
          <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-none self-start md:self-auto shrink-0 flex items-center justify-center text-brand-orange">
            <LucideIcon name="Sun" size={28} />
          </div>
        </div>

        {/* Input Control Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                Average Monthly Power Bill
              </label>
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#F59E0B]">
                ₦{monthlyBill.toLocaleString()}
              </span>
            </div>

            <div className="relative font-mono">
              <input
                type="range"
                min="50000"
                max="2500000"
                step="25000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                className="w-full h-1 bg-neutral-800 appearance-none cursor-ew-resize accent-[#F59E0B]"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-2">
                <span>₦50k</span>
                <span>₦500k</span>
                <span>₦1.0M</span>
                <span>₦1.5M</span>
                <span>₦2.5M</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 font-mono">
              * Calculations based on 4.8 peak sun hours daily.
            </p>
          </div>

          {/* Calculating Output Displays */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-none relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-neutral-700 font-bold text-[9px] font-mono group-hover:text-[#F59E0B] transition-colors">
                PV SIZE
              </div>
              <p className="text-[9px] text-neutral-400 uppercase font-mono tracking-wider">
                Required PV Size
              </p>
              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1">
                {estimatedCapacity} <span className="text-xs font-semibold text-[#F59E0B]">kW</span>
              </h4>
              <p className="text-[10px] text-neutral-500 font-mono mt-1">
                ~{(parseFloat(estimatedCapacity) * 4.8 * 30).toFixed(0)} kWh/month
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-none relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-neutral-700 font-bold text-[9px] font-mono group-hover:text-[#F59E0B] transition-colors">
                PANELS
              </div>
              <p className="text-[9px] text-neutral-400 uppercase font-mono tracking-wider">
                Photovoltaic Panel Estimate
              </p>
              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1">
                {estimatedPanels} <span className="text-xs font-semibold text-[#F59E0B]">units</span>
              </h4>
              <p className="text-[10px] text-neutral-500 font-mono mt-1">
                Industrial 440W mono
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-none relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-neutral-700 font-bold text-[9px] font-mono group-hover:text-[#F59E0B] transition-colors">
                GRID OFFSET
              </div>
              <p className="text-[9px] text-neutral-400 uppercase font-mono tracking-wider">
                10-Year Grid Offset
              </p>
              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-[#F59E0B] mt-1">
                ₦{tenYearSavings.toLocaleString()}
              </h4>
              <p className="text-[10px] text-emerald-400 font-semibold font-mono mt-1 uppercase">
                Active bill shield
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-none relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-neutral-700 font-bold text-[9px] font-mono group-hover:text-emerald-500 transition-colors">
                CARBON
              </div>
              <p className="text-[9px] text-neutral-400 uppercase font-mono tracking-wider">
                CO2 Prevented
              </p>
              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-emerald-400 mt-1">
                {co2Prevented} <span className="text-xs font-mono text-neutral-400">Tons/yr</span>
              </h4>
              <p className="text-[10px] text-neutral-500 font-mono mt-1">
                ~{Math.round(parseFloat(co2Prevented) * 16)} trees
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 leading-relaxed text-center sm:text-left font-sans">
            Have different roofing parameters, high shade factors, or heavy machine surges? We run custom site simulations.
          </p>
          <button
            onClick={() => {
              onEstimatorSubmit(`Solar System Calculator Estimate: Requested PV Capacity of ${estimatedCapacity} kW (${estimatedPanels} panels) based on estimated monthly electric bill of ₦${monthlyBill.toLocaleString()}`);
            }}
            className="px-6 py-3 bg-[#F59E0B] text-neutral-950 text-xs font-mono font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-black transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Lock Estimate Specs</span>
            <LucideIcon name="ArrowRight" size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
