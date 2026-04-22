"use client";
import { Upload } from "lucide-react";

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00286D] pt-32 pb-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-4">Careers SP Power</div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">Join our Team!</h1>
          <p className="text-white/70 text-base max-w-xl">We&apos;re always looking for passionate professionals. Apply today and be part of a team that values quality, collaboration, and innovation.</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#00286D] font-black text-2xl mb-8 text-center">Apply Now</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#00286D] font-semibold text-sm mb-2">Name *</label>
                <input type="text" placeholder="Enter full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
              </div>
              <div>
                <label className="block text-[#00286D] font-semibold text-sm mb-2">Email *</label>
                <input type="email" placeholder="Enter you Email id" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#00286D] font-semibold text-sm mb-2">Phone Number</label>
                <input type="tel" placeholder="Enter your Phone Number here" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
              </div>
              <div>
                <label className="block text-[#00286D] font-semibold text-sm mb-2">Position Applied for *</label>
                <input type="text" placeholder="Enter your position details here" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#00286D] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[#00286D] font-semibold text-sm mb-2">Upload Resume *</label>
              <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-4 py-5 cursor-pointer hover:border-[#00286D] transition-colors group">
                <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#00286D] transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-[#00286D] transition-colors">Choose file — no file selected</span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
            </div>
            <button type="submit" className="w-full bg-[#00286D] text-white font-bold py-4 rounded-full hover:bg-[#001a4a] transition-all duration-300 text-sm">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
