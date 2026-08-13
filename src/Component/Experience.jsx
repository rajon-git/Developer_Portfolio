import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheck, FiMapPin } from "react-icons/fi";
import { ExperienceList } from "../db/experiencedb";

function ExperienceCard({ experience, index, isLast }) {
  const isCurrent = experience.type === "Current";
  const initials = experience.company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex items-stretch gap-3 md:gap-5">
      <div className="flex w-8 shrink-0 flex-col items-center md:w-10">
        <div
          className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-[10px] border text-[9px] font-extrabold tracking-[-0.02em] md:h-9 md:w-9 md:text-[10px] ${
            isCurrent
              ? "border-brand-600 bg-brand-600 text-white shadow-[0_7px_20px_rgba(37,99,235,0.22)]"
              : "border-slate-300 bg-white text-slate-500"
          }`}
        >
          {initials}
        </div>
        {!isLast && <div className="min-h-8 w-px flex-1 bg-gradient-to-b from-slate-300 to-slate-100" />}
      </div>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.36, delay: index * 0.04 }}
        className={`mb-5 min-w-0 flex-1 overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card ${
          isCurrent ? "border-brand-100 shadow-[0_12px_34px_rgba(37,99,235,0.055)]" : "border-slate-200 shadow-soft"
        } ${isLast ? "!mb-0" : ""}`}
      >
        {isCurrent && <div className="h-0.5 bg-gradient-to-r from-brand-600 via-blue-400 to-transparent" />}

        <div className="p-5 md:p-6 lg:p-7">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
            <div className="min-w-0">
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-lg ${
                    isCurrent ? "bg-brand-50 text-brand-600" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <FiBriefcase size={12} />
                </span>
                <span className={`text-[11px] font-bold ${isCurrent ? "text-brand-700" : "text-slate-600"}`}>
                  {experience.company}
                </span>
                {isCurrent && (
                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
                    Current role
                  </span>
                )}
              </div>

              <h3 className="text-[20px] font-bold leading-tight tracking-[-0.022em] text-slate-950 md:text-[23px]">
                {experience.role}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-slate-500">
                <span className="flex items-center gap-1.5"><FiMapPin size={12} />{experience.location}</span>
                <span className="flex items-center gap-1.5"><FiCalendar size={12} />{experience.period}</span>
              </div>
            </div>

            <div className="shrink-0 lg:text-right">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">Employment</p>
              <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10.5px] font-semibold text-slate-600">
                {experience.type === "Current" ? "Full Time" : experience.type}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50/[0.45] px-5 py-5 md:px-6 md:py-6 lg:px-7">
          <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-600">Engineering Scope</p>
              <p className="mt-1 text-[11.5px] text-slate-500">Selected responsibilities and delivery areas from this role.</p>
            </div>
           
          </div>

          <div className="space-y-3">
            {experience.responsibilities.slice(0, 6).map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md ${
                    isCurrent ? "bg-brand-50 text-brand-600" : "bg-slate-200/70 text-slate-500"
                  }`}
                >
                  <FiCheck size={11} strokeWidth={2.4} />
                </span>
                <p className="text-[12px] leading-[1.68] text-slate-600 md:text-[12.5px]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-dashed border-slate-200 pt-4">
            <span className="mr-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-400">Stack</span>
            {experience.skills.slice(0, 12).map((skill) => (
              <span key={skill} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                {skill}
              </span>
            ))}
            {experience.skills.length > 12 && (
              <span className="text-[10px] font-semibold text-slate-400">+{experience.skills.length - 12} more</span>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-canvas py-14 md:py-[72px]">
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-9 md:flex-row md:items-end md:gap-10">
          <div className="max-w-[700px]">
            <p className="section-kicker">Professional Experience</p>
           
          </div>
       
        </div>

        <div>
          {ExperienceList.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
              isLast={index === ExperienceList.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
