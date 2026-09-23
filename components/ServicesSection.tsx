"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Minus, Check } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(0);

  return (
    <section className="bg-beige/40 py-24 sm:py-32 lg:py-40 border-t border-bordergray">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-bordergray">
          <div>
            <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
              Our Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight">
              MORE THAN <br />
              <span className="italic font-normal">PHOTOGRAPHS.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
            >
              <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                Explore Full Packages
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Editorial Services Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-7 divide-y divide-bordergray">
            {SERVICES.map((service, idx) => {
              const isOpen = activeService === idx;
              return (
                <div
                  key={service.number}
                  className="py-8 group cursor-pointer transition-colors"
                  onClick={() => setActiveService(isOpen ? null : idx)}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline space-x-6 sm:space-x-8">
                      <span className="font-serif text-lg sm:text-xl text-bronze/70 font-light">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal group-hover:text-bronze transition-colors font-light">
                          {service.title}
                        </h3>
                        <p className="text-warmgray text-xs sm:text-sm font-light mt-1 max-w-lg">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 text-charcoal/40 group-hover:text-bronze transition-colors">
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isOpen && (
                    <div className="mt-6 pl-12 sm:pl-16 space-y-4 animate-in fade-in duration-300">
                      <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-bronze block mb-2 font-medium">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-charcoal/80 flex items-start gap-2"
                            >
                              <Check className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal font-medium hover:text-bronze transition-colors"
                        >
                          <span className="border-b border-charcoal hover:border-bronze pb-0.5">
                            Enquire For This Discipline
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Preview Photograph */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-beige shadow-[0_20px_40px_rgba(23,21,19,0.06)] border border-bordergray/60">
              {SERVICES.map((s, idx) => (
                <div
                  key={s.number}
                  className={`absolute inset-0 transition-opacity duration-700 ease-editorial ${
                    activeService === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-ivory/80 block mb-1">
                      Discipline {s.number}
                    </span>
                    <p className="font-serif text-xl font-light text-ivory">
                      {s.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
