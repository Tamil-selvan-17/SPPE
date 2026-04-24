"use client";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  resume?: string;
};

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

  if (!fields.position.trim()) {
    errors.position = "Position applied for is required.";
  }

  if (!fields.resume) {
    errors.resume = "Please upload your resume.";
  } else {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(fields.resume.type)) {
      errors.resume = "Only PDF, DOC, or DOCX files are allowed.";
    } else if (fields.resume.size > 5 * 1024 * 1024) {
      errors.resume = "File size must be under 5MB.";
    }
  }

  return errors;
}

const inputClass =
  "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none transition-colors";
const validInput = `${inputClass} border-gray-200 focus:border-[#00286D]`;
const errorInput = `${inputClass} border-red-400 focus:border-red-500 bg-red-50`;

export default function CareersPageClient() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof Omit<FormFields, "resume">, value: string) => {
    const updated = { ...fields, [key]: value };
    setFields(updated);
    if (touched[key]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [key]: newErrors[key] }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const updated = { ...fields, resume: file };
    setFields(updated);
    if (touched.resume) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, resume: newErrors.resume }));
    }
  };

  const handleBlur = (key: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [key]: newErrors[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, position: true, resume: true };
    setTouched(allTouched);
    const newErrors = validate(fields);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFields({ name: "", email: "", phone: "", position: "", resume: null });
      setTouched({});
      setErrors({});
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <FadeIn>
        <section className="bg-[#00286D] pt-32 pb-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-4">Careers SP Power</div>
            <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">Join our Team!</h1>
            <p className="text-white/70 text-base max-w-xl">
              We&apos;re always looking for passionate professionals. Apply today and be part of a team that values quality, collaboration, and innovation.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Application Form */}
      <FadeIn delay={0.2}>
        <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#00286D] font-black text-2xl mb-8 text-center">Apply Now</h2>

            {submitted && (
              <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-green-700 font-bold text-sm">Application Submitted Successfully!</div>
                  <p className="text-green-600 text-sm mt-1">Thank you for applying. Our HR team will review your application and get in touch soon.</p>
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
                    placeholder="Enter your email id"
                    value={fields.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={errors.email ? errorInput : validInput}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Electrical Engineer"
                    value={fields.position}
                    onChange={(e) => handleChange("position", e.target.value)}
                    onBlur={() => handleBlur("position")}
                    className={errors.position ? errorInput : validInput}
                  />
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[#00286D] font-semibold text-sm mb-2">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <label
                  className={`flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-5 cursor-pointer transition-colors group ${
                    errors.resume ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-[#00286D]"
                  }`}
                >
                  <Upload
                    className={`w-5 h-5 transition-colors flex-shrink-0 ${
                      errors.resume ? "text-red-400" : "text-gray-400 group-hover:text-[#00286D]"
                    }`}
                  />
                  <span
                    className={`text-sm transition-colors ${
                      errors.resume
                        ? "text-red-400"
                        : fields.resume
                        ? "text-[#00286D] font-semibold"
                        : "text-gray-400 group-hover:text-[#00286D]"
                    }`}
                  >
                    {fields.resume ? fields.resume.name : "Choose file — PDF, DOC, DOCX (max 5MB)"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    onBlur={() => handleBlur("resume")}
                  />
                </label>
                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00286D] text-white font-bold py-4 rounded-full hover:bg-[#001a4a] transition-all duration-300 text-sm inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
