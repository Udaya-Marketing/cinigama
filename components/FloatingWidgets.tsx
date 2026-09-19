"use client";

import { useState } from "react";
import { MessageCircle, X, MessageSquare, Send } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation";

export default function FloatingWidgets() {
  const [showAskBadge, setShowAskBadge] = useState(true);
  const [isQuickChatOpen, setIsQuickChatOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState("");

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim()) return;
    const url = `https://wa.me/917904518754?text=${encodeURIComponent(quickMessage)}`;
    window.open(url, "_blank");
    setQuickMessage("");
    setIsQuickChatOpen(false);
  };

  return (
    <>
      {/* 1. Bottom Left Floating Green WhatsApp Pill matching Screenshot 2, 3, 4, 5 */}
      <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-40">
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-300 group text-xs sm:text-sm font-medium"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="tracking-wide">Chat &amp; get a quote</span>
        </a>
      </aside>

      {/* 2. Bottom Right Floating 'ASK US ANYTHING' + Circular Button */}
      <aside aria-label="Customer support" className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        {/* 'ASK US ANYTHING' dismissible badge matching Screenshot 2, 3, 4, 5 */}
        {showAskBadge && !isQuickChatOpen && (
          <div className="hidden sm:flex items-center space-x-2 bg-charcoal text-ivory px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-sans shadow-lg animate-in fade-in">
            <button
              onClick={() => setIsQuickChatOpen(true)}
              className="hover:text-[#C7A878] transition-colors"
            >
              Ask us anything
            </button>
            <button
              onClick={() => setShowAskBadge(false)}
              aria-label="Dismiss prompt"
              className="text-ivory/60 hover:text-ivory pl-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Circular Inquiry Button */}
        <button
          onClick={() => setIsQuickChatOpen(!isQuickChatOpen)}
          aria-label="Quick inquiry chat"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#C7A878] hover:bg-[#D4B788] text-charcoal flex items-center justify-center shadow-[0_8px_24px_rgba(199,168,120,0.4)] hover:scale-105 transition-all duration-300"
        >
          {isQuickChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
        </button>
      </aside>

      {/* Quick Inquiry Popover */}
      {isQuickChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-charcoal text-ivory border border-white/10 shadow-2xl p-6 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C7A878] block font-semibold">
                Instant Wedding Help
              </span>
              <h3 className="font-serif text-xl text-ivory font-light">
                Ask Cinigama Studio
              </h3>
            </div>
            <button
              onClick={() => setIsQuickChatOpen(false)}
              className="text-ivory/60 hover:text-ivory"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-ivory/70 font-light leading-relaxed mb-4">
            Have a question regarding pricing, travel availability, or wedding dates? Send a quick note and connect directly on WhatsApp.
          </p>

          <form onSubmit={handleQuickSend} className="space-y-3">
            <textarea
              rows={3}
              placeholder="Hi! I wanted to check availability for Dec 2025 in Udaipur..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              className="w-full bg-charcoal-light border border-white/15 p-3 text-xs text-ivory placeholder:text-white/40 focus:outline-none focus:border-[#C7A878] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#C7A878] hover:bg-[#D4B788] text-charcoal py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
