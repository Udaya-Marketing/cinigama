"use client";

import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const steps = [
    {
      num: "01",
      title: "GET IN TOUCH",
      desc: "Fill our private enquiry form with your wedding dates, venues, and creative vision.",
    },
    {
      num: "02",
      title: "LET'S TALK",
      desc: "A warm discovery consultation to align on aesthetic desires, rituals, and bespoke coverage.",
    },
    {
      num: "03",
      title: "PLAN TOGETHER",
      desc: "Lighting schedule, timeline curation, and shot list coordination with your wedding planner.",
    },
    {
      num: "04",
      title: "YOUR WEDDING DAY",
      desc: "Unobtrusive, cinematic documentation capturing raw joy while you remain fully present.",
    },
    {
      num: "05",
      title: "RELIVE IT FOREVER",
      desc: "Handcrafted master teaser in 7 days, full fine-art gallery, and bespoke leatherbound album.",
    },
  ];

  return (
    <section className="bg-ivory py-16 sm:py-28 lg:py-36 border-t border-bordergray/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-2.5 font-semibold">
            The Client Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight leading-tight">
            FROM FIRST CALL <br className="hidden sm:inline" />
            <span className="italic font-normal">TO FINAL FRAME.</span>
          </h2>
          <p className="text-warmgray text-xs sm:text-base font-light mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed">
            A seamless, transparent experience designed so you can immerse yourself completely in your celebration.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Connecting Line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-[1px] bg-bordergray z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Circle Indicator */}
              <div className="w-14 h-14 rounded-full bg-ivory border-2 border-bordergray group-hover:border-bronze flex items-center justify-center font-serif text-bronze text-base font-medium mb-6 shadow-sm transition-colors duration-300">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="font-serif text-base text-charcoal uppercase tracking-wider mb-2 font-medium group-hover:text-bronze transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-warmgray text-xs font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l border-bordergray space-y-8 sm:space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="relative"
            >
              {/* Dot on line */}
              <div className="absolute -left-[31px] sm:-left-[41px] top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-ivory border-2 border-bronze flex items-center justify-center text-[9px] sm:text-[10px] font-mono text-bronze font-bold">
                {step.num}
              </div>

              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-bronze block mb-1 font-mono">
                Step {step.num}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-charcoal tracking-wide mb-1.5 font-medium">
                {step.title}
              </h3>
              <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
