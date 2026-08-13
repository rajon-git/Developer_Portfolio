import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

import portrait from "../Banner/rajon.jpg";
import resume from "../Banner/MD_Rajon_Ahamad_01310561120.pdf";


export default function About() {
  return (
    <section id="about" className="border-b border-slate-200 bg-canvas">
      <div className="section-shell pb-16 pt-[104px] md:pb-20 md:pt-[122px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.22fr_.78fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46 }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-[11px] font-semibold text-brand-700">
                Software Engineer · ERP & Backend
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <FiMapPin size={13} /> Dhaka, Bangladesh
              </span>
            </div>

           
            <p className="mt-5 max-w-[720px] text-justify text-[15px] leading-7 text-slate-600 md:text-[16px] md:leading-8">
              I’m Md. Rajon Ahamad, a software developer with 3.2+ years of experience across ERP, Python backend engineering, high-performance web application, APIs, dashboards, reporting, and production deployment. I focus on turning operational requirements into maintainable software that teams can use every day.
            </p>
            <p className="mt-5 max-w-[720px] text-justify text-[15px] leading-7 text-slate-600 md:text-[16px] md:leading-8">
              My experience includes HRM, CRM, Inventory, Manufacturing BOM, POS, Events, Accounting, E-commerce, and Customer Portal solutions. I also manage deployment and production support using Docker, Nginx, Gunicorn, VPS, CI/CD and cPanel-based server environments.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ScrollLink to="projects" smooth duration={420} offset={-64} className="cursor-pointer">
                <span className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto">
                  View projects <FiArrowRight size={15} />
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
              <a
                href="https://github.com/rajon-git"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 transition-colors hover:text-slate-950"
              >
                <FiGithub size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-rajon-ahamad-23938825b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 transition-colors hover:text-slate-950"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.52, delay: 0.05 }}
            className="mx-auto w-full max-w-[390px] lg:max-w-none"
          >
            <div className="rounded-[18px] border border-slate-200 bg-white p-2 shadow-card">
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={portrait}
                  alt="Md. Rajon Ahamad"
                  className="h-[340px] w-full object-cover object-top md:h-[370px]"
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
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
