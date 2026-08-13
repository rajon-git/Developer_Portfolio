import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";
import { EducationList } from "../db/educationdb";

export default function Education() {
  return (
    <section
      id="education"
      className="border-b border-slate-200 bg-canvas py-14 md:py-16"
    >
      <div className="section-shell">

        {/* -------------------------------------------------
            Section Header
        -------------------------------------------------- */}
        <div className="mb-9 max-w-2xl">
          <p className="section-kicker">Education</p>

          
        </div>

        {/* -------------------------------------------------
            Education Timeline
        -------------------------------------------------- */}
        <div className="relative">

          {/* Timeline vertical line */}
          <div className="absolute bottom-5 left-[19px] top-5 hidden w-px bg-slate-200 sm:block" />

          <div className="space-y-4">
            {EducationList.map((item, index) => (
              <motion.article
                key={`${item.title}-${item.passingYear}`}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex items-stretch gap-4 sm:gap-5"
              >

                {/* -----------------------------------------
                    Timeline Marker
                ------------------------------------------ */}
                <div className="relative z-10 hidden shrink-0 sm:block">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm ${
                      index === 0
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-brand-600"
                    }`}
                  >
                    <FiBookOpen size={16} />
                  </div>
                </div>

                {/* -----------------------------------------
                    Education Card
                ------------------------------------------ */}
                <div className="group min-w-0 flex-1">
                  <div
                    className="
                      relative overflow-hidden rounded-2xl
                      border border-slate-200
                      bg-white
                      px-5 py-5
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-slate-300
                      hover:shadow-soft
                      md:px-6 md:py-6
                    "
                  >

                    {/* subtle accent line */}
                    <div
                      className={`absolute left-0 top-0 h-full w-[3px] ${
                        index === 0
                          ? "bg-brand-600"
                          : "bg-slate-200"
                      }`}
                    />

                    {/* -------------------------------------
                        Top Header
                    -------------------------------------- */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                      <div className="min-w-0">

                        {/* Level / Heading */}
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span
                            className="
                              inline-flex items-center
                              rounded-full
                              bg-brand-50
                              px-2.5 py-1
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.08em]
                              text-brand-600
                            "
                          >
                            {item.heading}
                          </span>

                          {index === 0 && (
                            <span
                              className="
                                inline-flex items-center gap-1
                                rounded-full
                                bg-emerald-50
                                px-2.5 py-1
                                text-[10px]
                                font-semibold
                                text-emerald-700
                              "
                            >
                              <FiCheckCircle size={11} />
                              Highest Qualification
                            </span>
                          )}
                        </div>

                        {/* Degree */}
                        <h3
                          className="
                            text-[17px]
                            font-bold
                            leading-snug
                            tracking-[-0.015em]
                            text-slate-950
                            md:text-[19px]
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Institution */}
                        <p
                          className="
                            mt-1.5
                            max-w-3xl
                            text-[12px]
                            leading-5
                            text-slate-500
                            md:text-[13px]
                          "
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Year */}
                      <div
                        className="
                          flex shrink-0 items-center gap-2
                          self-start
                          rounded-lg
                          border border-slate-200
                          bg-slate-50
                          px-3 py-2
                          text-[11px]
                          font-semibold
                          text-slate-600
                        "
                      >
                        <FiCalendar
                          size={13}
                          className="text-brand-600"
                        />

                        {String(item.passingYear).trim()}
                      </div>
                    </div>

                    {/* -------------------------------------
                        Bottom subtle information strip
                    -------------------------------------- */}
                    <div
                      className="
                        mt-5 flex items-center gap-2
                        border-t border-slate-100
                        pt-4
                      "
                    >
                      <span
                        className="
                          h-1.5 w-1.5
                          rounded-full
                          bg-brand-500
                        "
                      />

                      <p
                        className="
                          text-[11px]
                          font-medium
                          text-slate-500
                        "
                      >
                        Computer Science · Software Engineering ·
                        Technology Foundation
                      </p>
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}