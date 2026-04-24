"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/ui/FadeIn";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  enquiry: string;
};

type FormErrors = Partial<FormFields>;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Full name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (fields.phone && !/^[6-9]\d{9}$/.test(fields.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!fields.enquiry.trim()) {
    errors.enquiry = "Please describe your enquiry.";
  } else if (fields.enquiry.trim().length < 10) {
    errors.enquiry = "Enquiry must be at least 10 characters.";
  }

  return errors;
}

const inputClass =
  "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none transition-colors";
const validInput = `${inputClass} border-gray-200 focus:border-[#00286D]`;
const errorInput = `${inputClass} border-red-400 focus:border-red-500 bg-red-50`;

export default function ContactPageClient() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof FormFields, value: string) => {
    const updated = { ...fields, [key]: value };
    setFields(updated);
    if (touched[key]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [key]: newErrors[key] }));
    }
  };

  const handleBlur = (key: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [key]: newErrors[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, enquiry: true };
    setTouched(allTouched);
    const newErrors = validate(fields);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFields({ name: "", email: "", phone: "", enquiry: "" });
      setTouched({});
      setErrors({});
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32 pb-20 px-4 md:px-8 lg:px-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            loading="lazy" 
            src="/images/placeholder.png" 
            alt="Contact SP Power Engineers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00286D] via-[#00286D]/85 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <FadeIn direction="left" delay={0.1}>
            <div className="inline-block bg-[#9DEF06]/20 backdrop-blur-sm border border-[#9DEF06]/30 text-[#9DEF06] font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Contact Us
            </div>
          </FadeIn>
          
          <div className="max-w-3xl">
            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-white font-black text-4xl md:text-6xl leading-tight mb-4 drop-shadow-lg">
                Let&apos;s Discuss Your Project
              </h1>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Reach out to our engineering team for consultation, technical guidance, or a project quote.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <FadeIn delay={0.2}>
        <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

              {/* Form */}
              <div>
                <h2 className="text-[#00286D] font-black text-2xl mb-6">Send Us a Message</h2>

                {submitted && (
                  <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-green-700 font-bold text-sm">Message Sent Successfully!</div>
                      <p className="text-green-600 text-sm mt-1">Thank you for reaching out. Our team will get back to you shortly.</p>
                    </div>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#00286D] font-semibold text-sm mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        value={fields.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={errors.name ? errorInput : validInput}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[#00286D] font-semibold text-sm mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={fields.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={errors.email ? errorInput : validInput}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#00286D] font-semibold text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={fields.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={errors.phone ? errorInput : validInput}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[#00286D] font-semibold text-sm mb-2">
                      Enquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={fields.enquiry}
                      onChange={(e) => handleChange("enquiry", e.target.value)}
                      onBlur={() => handleBlur("enquiry")}
                      className={`${errors.enquiry ? errorInput : validInput} resize-none`}
                    />
                    {errors.enquiry && <p className="text-red-500 text-xs mt-1">{errors.enquiry}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#00286D] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#001a4a] transition-all duration-300 inline-flex items-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Quote <Send className="w-4 h-4" />
                      </>
                    )}
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
                <div className="aspect-video rounded-2xl bg-gray-100 overflow-hidden">
                  <iframe 
                    src="https://maps.google.com/maps?q=13.040561,80.155764&hl=en&z=15&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
