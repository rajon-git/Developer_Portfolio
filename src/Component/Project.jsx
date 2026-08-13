import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {FiArrowLeft,FiArrowRight,FiArrowUpRight,FiCode,FiExternalLink,FiGithub,FiGrid,FiLayers,FiLock,FiSearch,FiStar,} from "react-icons/fi";
import { ProjectList } from "../db/projectdb";

const PROJECTS_PER_PAGE = 4;

function ProjectCard({project,index,absoluteIndex}) {
  const hasLive = project.liveLink && project.liveLink !== "#";
  const hasGit = project.gitLink && project.gitLink !== "#";
  const techStack = project.techStack || [];
  const visibleStack = techStack.slice(0, 6);
  const hiddenStackCount = Math.max(
    techStack.length - visibleStack.length,
    0
  );

  return (
    <motion.article
      layout
      initial={{opacity: 0,y: 18,}}
      animate={{opacity: 1, y: 0,}}
      exit={{opacity: 0,y: 10,}}
      transition={{duration: 0.35,delay: index * 0.04,ease: [0.22, 1, 0.36, 1],}}
      className="group h-full"
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-2xl  border border-slate-200  bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_55px_-25px_rgba(15,23,42,0.28)]">
        
        <div className="p-2.5">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100" >
            <div className="flex h-8 items-center border-b border-slate-200 bg-slate-50 px-3" >
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
              <div className="mx-auto h-2 w-[120px] rounded-full bg-slate-200 sm:w-[160px]"/>
              <span className="font-mono text-[9px] font-semibold text-slate-400" >
                {String(absoluteIndex + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src={project.img}
                alt={`${project.title} project`}
                loading="lazy"
                className="h-[220px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] md:h-[245px]"/>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/[0.08] via-transparent to-transparent" />

              {project.featured && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/70 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-slate-900 shadow-sm backdrop-blur">
                  <FiStar size={11} />
                  Featured
                </span>
              )}

              <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-lg border border-white/80 bg-white/95  text-slate-900  opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" >
                <FiArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-3 md:px-6 md:pb-6">

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className=" inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
              <FiLayers size={11} />
              {project.category}
            </span>

            {project.group && project.group !== project.category && (
              <span className="text-[10px] font-semibold text-slate-400">
                {project.group}
              </span>
            )}
          </div>

          <h3 className="text-[20px] font-bold leading-[1.25] tracking-[-0.025em] text-slate-950 md:text-[22px]">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1.5 text-[12px] font-semibold leading-5 text-brand-600">
              {project.subtitle}
            </p>
          )}

          <p className="mt-3 line-clamp-3 text-[13px] leading-[1.7] text-slate-600 " >
            {project.summary}
          </p>

          {(project.highlights || []).length > 0 && (
            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
              <div className="mb-2.5 flex items-center gap-2">
                <FiCode
                  size={12}
                  className="text-brand-600"
                />

                <span  className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
                  Engineering highlights
                </span>
              </div>

              <div className="space-y-2">
                {(project.highlights || [])
                  .slice(0, 2)
                  .map((item) => (
                    <div key={item} className="flex items-start gap-2.5" >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full  bg-brand-500"/>
                      <p className=" line-clamp-2 text-[11.5px] leading-[1.65] text-slate-600 ">
                        {item}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="mt-5">
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.09em] text-slate-400">
              Technology
            </p>

            <div className="flex flex-wrap gap-1.5">
              {visibleStack.map(({ name, Icon }) => (
                <span
                  key={name}
                  className="
                    inline-flex
                    min-h-[28px]
                    items-center
                    gap-1.5
                    rounded-lg
                    border border-slate-200
                    bg-white
                    px-2.5
                    text-[10.5px]
                    font-semibold
                    text-slate-600
                  "
                >
                  <Icon
                    size={12}
                    className="text-slate-500"
                  />

                  {name}
                </span>
              ))}

              {hiddenStackCount > 0 && (
                <span className="inline-flex min-h-[28px] items-center rounded-lg  border border-dashed border-slate-300 px-2.5 text-[10px] font-bold text-slate-400" >
                  +{hiddenStackCount}
                </span>
              )}
            </div>
          </div>

          <div
            className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5" >
          
            <div>
              {hasLive ? (
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Production
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400" >
                  <FiLock size={10} />
                  Private project
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {hasGit && (
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950">
                  <FiGithub size={14} />
                </a>
              )}

              {hasLive && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-slate-950 px-3.5 text-[10.5px] font-bold text-white transition-all duration-200 hover:bg-slate-800">
                  View project
                  <FiExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SMART PAGINATION
========================================================= */

function createPagination(currentPage, totalPages) {
  if (totalPages <= 5) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}


export default function Project() {
  const sectionRef = useRef(null);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [searchQuery, setSearchQuery] =
    useState("");


  const categories = useMemo(() => {
    const groups = ProjectList.map(
      (project) =>
        project.group || project.category
    ).filter(Boolean);

    return [
      "All",
      ...Array.from(new Set(groups)),
    ];
  }, []);


  const categoryCounts = useMemo(() => {
    const counts = {
      All: ProjectList.length,
    };

    ProjectList.forEach((project) => {
      const key =
        project.group || project.category;

      counts[key] =
        (counts[key] || 0) + 1;
    });

    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    return ProjectList.filter((project) => {
      const category =
        project.group || project.category;

      const matchesCategory =
        activeCategory === "All" ||
        category === activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const stackText = (
        project.techStack || []
      )
        .map((item) => item.name)
        .join(" ");

      const searchableText = [
        project.title,
        project.subtitle,
        project.summary,
        project.category,
        project.group,
        stackText,
        ...(project.highlights || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [
    activeCategory,
    searchQuery,
  ]);


  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProjects.length /
        PROJECTS_PER_PAGE
    )
  );

  const visibleProjects = useMemo(() => {
    const start =
      (currentPage - 1) *
      PROJECTS_PER_PAGE;

    return filteredProjects.slice(
      start,
      start + PROJECTS_PER_PAGE
    );
  }, [
    filteredProjects,
    currentPage,
  ]);

  const paginationItems =
    createPagination(
      currentPage,
      totalPages
    );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [
    currentPage,
    totalPages,
  ]);

  /* -------------------------------------------------------
     ACTIONS
  -------------------------------------------------------- */

  const selectCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const changePage = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.setTimeout(() => {
      if (!sectionRef.current) {
        return;
      }

      const top =
        sectionRef.current
          .getBoundingClientRect()
          .top +
        window.scrollY +
        230;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 40);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        border-b border-slate-200
        bg-white
        py-16
        md:py-20
      "
    >
      <div className="section-shell">

        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div
          className="
            flex flex-col
            gap-5
            border-b border-slate-200
            pb-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[620px]">
            <p className="section-kicker">Engineering projects</p>
          </div>

          <div className="flex gap-7">
            <div>
              <p className=" text-[22px] font-bold tracking-tight text-slate-950" >
                {ProjectList.length}
              </p>

              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                Projects
              </p>
            </div>

            <div className="border-l border-slate-200 pl-7">
              <p className=" text-[22px] font-bold tracking-tight text-slate-950">
                {categories.length - 1}
              </p>

              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]  text-slate-400" >
                Categories
              </p>
            </div>
          </div>
        </div>
       
        <div className=" mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="project-filter-scroll flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const selected =
                activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    selectCategory(category)
                  }
                  className={`inline-flex h-9 shrink-0  items-center gap-2 rounded-lg border px-3.5 text-[10.5px] font-bold transition-all duration-200
                    ${
                      selected
                        ? `
                          border-slate-950
                          bg-slate-950
                          text-white
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-500
                          hover:border-slate-300
                          hover:bg-slate-50
                          hover:text-slate-950
                        `
                    }
                  `}
                >
                  {category}

                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[8.5px]
                      ${
                        selected
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-400"
                      }
                    `}
                  >
                    {categoryCounts[category] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[260px]">
            <FiSearch size={14} className=" pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search projects..."
              className="
                h-10
                w-full
                rounded-lg
                border border-slate-200
                bg-white
                pl-9
                pr-3
                text-[11.5px]
                font-medium
                text-slate-700
                outline-none
                transition-all
                placeholder:text-slate-400
                focus:border-slate-400
                focus:ring-4
                focus:ring-slate-100
              "
            />
          </div>
        </div>

        {/* =================================================
            RESULTS META
        ================================================== */}
        <div
          className="
            mb-5 mt-6
            flex items-center
            justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-2">
            <FiGrid
              size={12}
              className="text-slate-400"
            />

            <p
              className="
                text-[10.5px]
                font-semibold
                text-slate-500
              "
            >
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          </div>

          {totalPages > 1 && (
            <p
              className="
                text-[10px]
                font-semibold
                text-slate-400
              "
            >
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}-${searchQuery}`}
            initial={{
              opacity: 0,
              y: 6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -4,
            }}
            transition={{
              duration: 0.22,
            }}
            className="grid gap-5 lg:grid-cols-2 lg:gap-6 ">
            {visibleProjects.map(
              (project, index) => (
                <ProjectCard
                  key={`${project.title}-${index}`}
                  project={project}
                  index={index}
                  absoluteIndex={ProjectList.indexOf(
                    project
                  )}
                />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <FiSearch size={22} className="mx-auto text-slate-300"/>
            <h3 className=" mt-4 text-[15px] font-bold text-slate-800">
              No matching projects
            </h3>

            <p className="mt-1.5 text-[11px] text-slate-500">
              Try another category or search term.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-1.5
            "
          >
            <button
              type="button"
              aria-label="Previous project page"
              disabled={currentPage === 1}
              onClick={() =>
                changePage(currentPage - 1)
              }
              className="mr-1 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35" >
              <FiArrowLeft size={14} />
            </button>

            {paginationItems.map(
              (page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="flex h-9 w-7 items-center justify-center text-[11px] font-bold text-slate-400">
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() =>
                      changePage(page)
                    }
                    className={`h-9 min-w-9 rounded-lg border px-2 text-[10.5px] font-bold transition-all
                      ${
                        currentPage === page
                          ? `
                            border-slate-950 bg-slate-950 text-white`
                          : `
                          border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950`
                      }
                    `}
                  >
                    {page}
                  </button>
                );
              }
            )}

            <button
              type="button"
              aria-label="Next project page"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                changePage(currentPage + 1)
              }
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200  bg-white text-slate-600 transition-all  hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35">
              <FiArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}