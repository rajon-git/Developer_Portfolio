import { GitHubCalendar } from "react-github-calendar";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function GitCalendar() {
  const username = "rajon-git";

  return (
    <section id="github" className="border-b border-slate-200 bg-white py-14 md:py-16">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[.4fr_1.6fr] lg:gap-12">
        <div>
          <div className="mb-3 flex items-center gap-2 text-brand-600">
            <FiGithub size={14} />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em]">GitHub</span>
          </div>
          
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-[11px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <FiGithub size={14} /> github.com/{username} <FiArrowUpRight size={13} />
          </a>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-[12px] font-bold text-slate-950">Contribution activity</p>
            <p className="font-mono text-[9.5px] font-semibold text-slate-400">@{username}</p>
          </div>
          <div className="min-w-[690px]">
            <GitHubCalendar username={username} blockSize={11} blockMargin={4} fontSize={10} />
          </div>
        </div>
      </div>
    </section>
  );
}
