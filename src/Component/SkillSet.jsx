import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import {
  SiBootstrap,
  SiCelery,
  SiChartdotjs,
  SiCss3,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiNodedotjs,
  SiNumpy,
  SiPandas,

} from "react-icons/si";
import { FaCubes } from "react-icons/fa";

const coreStack = [
  ["Python", SiPython],
  ["JavaScript", SiJavascript, true],
];

const skillGroups = [
  {
    title: "Backend & ERP",
    subtitle: "Business systems & APIs",
    Icon: FiLayers,
    featured: true,
    skills: [
      ["Odoo", FaCubes, true],
      ["Django", SiDjango, true],
      ["Django REST", SiDjango, true],
      ["NodeJS", SiNodedotjs, true],
    ],
  },
  {
    title: "Frontend",
    subtitle: "Responsive interfaces",
    Icon: FiCode,
    skills: [
      ["React.js", SiReact, true],
      ["Tailwind CSS", SiTailwindcss, true],
      ["Bootstrap", SiBootstrap],
      ["OWL UI", FiCode],
    ],
  },
  {
    title: "Data & Charts",
    subtitle: "Reporting & analytics",
    Icon: FiBarChart2,
    skills: [
      ["Numpy",  SiNumpy, true],
      ["Pandas", SiPandas, true],
      ["Matplotlib", FiBarChart2],
      ["Seaborn", FiBarChart2],
    ],
  },
  {
    title: "Database",
    subtitle: "Storage & data layer",
    Icon: FiDatabase,
    skills: [
      ["PostgreSQL", SiPostgresql, true],
      ["MySQL", SiMysql],
      ["Redis", SiRedis],
      ["MongoDB", SiMongodb],
      ["SQL", FiDatabase, true],
    ],
  },
  {
    title: "Deployment",
    subtitle: "Production delivery",
    Icon: FiServer,
    skills: [
      ["Docker", SiDocker, true],
      ["Nginx", SiNginx, true],
      ["Linux", SiLinux],
      ["Gunicorn", FiServer],
      ["VPS", FiServer],
      ["GitHub Actions", SiGithubactions],
    ],
  },
  {
    title: "Version Control",
    subtitle: "Collaboration workflow",
    Icon: FiGitBranch,
    skills: [
      ["Git", SiGit, true],
      ["GitHub", SiGithub, true],
    ],
  },
];

function CoreSkill({ name, Icon }) {
  return (
    <div className="flex min-h-[40px] items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon size={14} />
      </span>
      <span className="whitespace-nowrap text-[12px] font-bold text-slate-700">{name}</span>
    </div>
  );
}

function SkillItem({ name, Icon, primary }) {
  return (
    <div
      className={`flex min-h-[38px] items-center gap-2 rounded-lg border px-2.5 py-2 transition-all duration-200 ${
        primary
          ? "border-brand-100 bg-brand-50/70 text-brand-700 hover:border-brand-200 hover:bg-brand-50"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <Icon size={14} className="shrink-0" />
      <span className="text-[12px] font-semibold leading-tight md:text-[12.5px]">{name}</span>
    </div>
  );
}

function SkillGroup({ group, index }) {
  const GroupIcon = group.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.32, delay: index * 0.035 }}
      className={`relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft ${
        group.featured ? "border-brand-200 shadow-[0_10px_30px_rgba(37,99,235,0.06)]" : "border-slate-200"
      }`}
    >
      {group.featured && <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-blue-400 to-transparent" />}

      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
              group.featured
                ? "border-brand-100 bg-brand-50 text-brand-600"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            <GroupIcon size={17} />
          </span>
          <div className="min-w-0">
            <h3 className="text-[15px] font-bold leading-tight text-slate-950">{group.title}</h3>
            <p className="mt-1 text-[11px] font-medium text-slate-500">{group.subtitle}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-400">
          {group.skills.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {group.skills.map(([name, Icon, primary]) => (
          <SkillItem key={name} name={name} Icon={Icon} primary={primary} />
        ))}
      </div>
    </motion.article>
  );
}

export default function SkillSet() {
  return (
    <section id="skills" className="border-b border-slate-200 bg-white py-14 md:py-16">
      <div className="section-shell">
        <div className="mb-7 grid items-end gap-4 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="section-kicker">Technical Skill Set</p>
          </div>
          
        </div>

        <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 md:p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            
            {/* Left: Core Stack */}
            <div className="flex shrink-0 items-center gap-2.5 md:w-[150px]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                <FiTerminal size={14} />
              </span>

              <p className="text-[13px] font-bold text-slate-950">
                Core Stack
              </p>
            </div>

            {/* Right: Skills */}
            <div className="flex flex-1 flex-wrap gap-2">
              {coreStack.map(([name, Icon]) => (
                <CoreSkill
                  key={name}
                  name={name}
                  Icon={Icon}
                />
              ))}
            </div>

          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
