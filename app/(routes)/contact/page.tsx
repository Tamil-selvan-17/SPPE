"use client";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00286D] pt-32 pb-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-4">Contact US</div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Discuss Your Project<br /><span className="text-[#9DEF06]">Requirements!</span>
          </h1>
          <p className="text-white/70 text-base">Speak with our engineering team for consultation and technical guidance.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <div>
              <h2 className="text-[#00286D] font-black text-2xl mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#00286D] font-semibold text-sm mb-2">Name *</label>
                    <input type="text" placeholder="Enter full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#00286D] font-semibold text-sm mb-2">Email *</label>
                    <input type="email" placeholder="Enter you email id" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#00286D] font-semibold text-sm mb-2">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
                </div>
                <div>
                  <label className="block text-[#00286D] font-semibold text-sm mb-2">Enquiry *</label>
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors resize-none" />
                </div>
                <button type="submit" className="bg-[#00286D] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#001a4a] transition-all duration-300 inline-flex items-center gap-2 text-sm">
                  Get Quote <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-[#00286D] font-black text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#00286D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#9DEF06]" />
                  </div>
                  <div>
                    <div className="text-[#00286D] font-bold text-sm mb-1">Contact number</div>
                    <a href={`tel:${siteConfig.contact.phone2}`} className="text-gray-600 text-sm hover:text-[#00286D] transition-colors">{siteConfig.contact.phone2}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#00286D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#9DEF06]" />
                  </div>
                  <div>
                    <div className="text-[#00286D] font-bold text-sm mb-1">Outlook</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 text-sm hover:text-[#00286D] transition-colors">{siteConfig.contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#00286D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#9DEF06]" />
                  </div>
                  <div>
                    <div className="text-[#00286D] font-bold text-sm mb-1">Location</div>
                    <p className="text-gray-600 text-sm">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl bg-gray-100 overflow-hidden">
                <img loading="lazy" src="/images/placeholder.png" alt="Office Location Map" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
