import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

import portrait from "../Banner/rajon.jpg";
import resume from "../Banner/MD_Rajon_Ahamad_01310561120.pdf";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fa]">
      <div className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-brand-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-slate-200/70 blur-3xl" />
      <div className="section-shell relative pb-16 pt-[104px] md:pb-20 md:pt-[122px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46 }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-emerald-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Open to meaningful opportunities</span>
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <FiMapPin size={13} /> Dhaka, Bangladesh
              </span>
            </div>

            <p className="section-kicker">The integration of product thinking and technology</p>
            <h1 className="mt-4 max-w-[760px] text-[42px] font-bold leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-[56px] md:text-[68px]">
              I build digital systems that make businesses better.
            </h1>
            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-slate-600 md:text-[16px] md:leading-8">
              I’m Md. Rajon Ahamad, a software developer with 3.2+ years of experience across ERP, Python backend engineering, high-performance web applications, APIs, dashboards, reporting, and production deployment. I turn operational requirements into maintainable software that teams can use every day.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Python & Django",
                "ERP & Odoo",
                "React interfaces",
                "Production systems",
              ].map((skill) => (
                <span key={skill} className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:rajon.zhsust15@gmail.com"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
              >
                <FiMail size={14} /> Contact me
              </a>
              <ScrollLink to="experience" smooth duration={420} offset={-64} className="cursor-pointer">
                <span className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-[13px] font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 sm:w-auto">
                  View profile <FiArrowRight size={15} />
                </span>
              </ScrollLink>
              <a
                href={resume}
                download="MD_Rajon_Ahamad_Resume.pdf"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-[13px] font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                <FiDownload size={14} /> Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a href="https://github.com/rajon-git" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 transition-colors hover:text-slate-950">
                <FiGithub size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/md-rajon-ahamad-23938825b/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 transition-colors hover:text-slate-950">
                <FiLinkedin size={14} /> LinkedIn
              </a>
            </div>

            <div className="mt-9 grid max-w-[620px] grid-cols-3 gap-2.5 border-t border-slate-200 pt-6 sm:gap-4">
              <div>
                <p className="text-[22px] font-bold tracking-tight text-slate-950">3.2+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">Years building</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-5">
                <p className="text-[22px] font-bold tracking-tight text-slate-950">10+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">Business domains</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-5">
                <p className="text-[22px] font-bold tracking-tight text-slate-950">24/7</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">Production mindset</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.52, delay: 0.05 }}
            className="mx-auto w-full max-w-[390px] lg:max-w-none"
          >
            <div className="relative rounded-[30px] border border-slate-200/80 bg-white/70 p-2 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm">
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">engineering profile</span>
                <span className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>available</span>
                </span>
              </div>
              <div className="relative flex h-[420px] items-end justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#dfeaff] via-[#f8fbff] to-[#e9edf3] md:h-[475px]">
                <div className="absolute left-1/2 top-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-white/70 bg-brand-100/50" />
                <div className="absolute bottom-0 h-1/2 w-4/5 rounded-full bg-white/80 blur-2xl" />
                <img
                  src={portrait}
                  alt="Md. Rajon Ahamad"
                  className="relative z-10 h-full w-full object-contain object-bottom mix-blend-multiply"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-3 py-3.5">
                <div>
                  <p className="text-[12px] font-bold text-slate-950">Md. Rajon Ahamad</p>
                  <p className="mt-1 text-[11px] text-slate-500">ERP · Backend · Business Systems</p>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
              </div>
              <div className="absolute -left-5 top-20 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-card sm:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><FiLayers size={14} /></span>
                <div>
                  <p className="text-[10px] font-bold text-slate-950">Systems thinker</p>
                  <p className="mt-0.5 text-[9px] text-slate-500">ERP · APIs · Automation</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-card">
                <FiCheckCircle className="text-emerald-500" size={15} />
                <div>
                  <p className="text-[10px] font-bold text-slate-950">Reliable delivery</p>
                  <p className="mt-0.5 text-[9px] text-slate-500">Built for real operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
