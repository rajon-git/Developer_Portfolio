import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUp,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiXCircle,
} from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";

const initialState = { name: "", email: "", number: "", message: "" };

export default function Footer() {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState(null);

  const update = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const showNotice = (type, message) => {
    setNotice({ type, message });
    window.setTimeout(() => setNotice(null), 3500);
  };

  async function submit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showNotice("error", "Please complete the required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showNotice("error", "Enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showNotice("success", "Message sent successfully.");
      setForm(initialState);
    } catch (error) {
      console.error("EmailJS failed:", error);
      showNotice("error", "Message could not be sent. Please use the email link instead.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const contacts = [
    { icon: FiMail, label: "Email", value: "rajon.zhsust15@gmail.com", href: "mailto:rajon.zhsust15@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+880 13105-61120", href: "tel:+801310561120" },
    { icon: FiLinkedin, label: "LinkedIn", value: "Md. Rajon Ahamad", href: "https://www.linkedin.com/in/md-rajon-ahamad-23938825b/" },
    { icon: FiGithub, label: "GitHub", value: "rajon-git", href: "https://github.com/rajon-git" },
  ];

  return (
    <footer id="contact" className="relative bg-[#0B1220] pb-7 pt-16 text-white md:pt-20">
      {notice && (
        <div
          className={`fixed right-4 top-20 z-[70] flex max-w-[340px] items-center gap-2.5 rounded-xl border px-4 py-3 text-[12px] font-semibold shadow-xl backdrop-blur md:right-6 ${
            notice.type === "success"
              ? "border-emerald-400/30 bg-emerald-950/90 text-emerald-100"
              : "border-rose-400/30 bg-rose-950/90 text-rose-100"
          }`}
        >
          {notice.type === "success" ? <FiCheckCircle size={16} /> : <FiXCircle size={16} />}
          {notice.message}
        </div>
      )}

      <div className="section-shell">
        <div className="grid gap-9 lg:grid-cols-[.88fr_1.12fr] lg:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-400">Contact</p>
            <h2 className="mt-3 max-w-[520px] text-[30px] font-bold leading-[1.2] tracking-[-0.028em] text-white md:text-[36px]">
              Let’s discuss a product, workflow, or engineering problem.
            </h2>
            <p className="mt-4 max-w-[500px] text-[13px] leading-7 text-slate-400">
              I’m interested in ERP, backend systems, business automation, integrations, reporting, and production web applications.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.055]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                    <Icon size={14} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">{label}</span>
                    <span className="mt-1 block truncate text-[11px] font-semibold text-slate-200">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-slate-950 shadow-2xl md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-600">Send a message</p>
                <p className="mt-1 text-[11px] text-slate-500">A short note is enough to start.</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <FiSend size={14} />
              </span>
            </div>

            <form onSubmit={submit} className="space-y-3.5">
              <div className="grid gap-3.5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-700">Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                    className="focus-ring h-[42px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-[12px] text-slate-900 placeholder:text-slate-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-700">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    className="focus-ring h-[42px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-[12px] text-slate-900 placeholder:text-slate-400"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-slate-700">
                  Phone <span className="font-medium text-slate-400">(optional)</span>
                </span>
                <input
                  name="number"
                  type="tel"
                  value={form.number}
                  onChange={update}
                  placeholder="Phone number"
                  className="focus-ring h-[42px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-[12px] text-slate-900 placeholder:text-slate-400"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-slate-700">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="Project, role, or engineering problem..."
                  className="focus-ring min-h-[120px] w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-[12px] text-slate-900 placeholder:text-slate-400"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 text-[12px] font-semibold text-white transition-all duration-200 hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"} <FiSend size={13} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-5 md:mt-12">
          <div>
            <p className="text-[11px] font-bold text-white">Md. Rajon Ahamad</p>
            <p className="mt-1 text-[9px] text-slate-500">© {new Date().getFullYear()} · Software Engineer Portfolio</p>
          </div>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.07] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
