"use client";

import { useState, useEffect } from "react";
import { Github, Twitter, Mail, ExternalLink, LucideIcon } from "lucide-react";
import ParticlesBackground from "./background";

interface NavItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  isEmail?: boolean;
}

interface SectionHeaderProps {
  title: string;
}

interface TechTagProps {
  tech: string;
}

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  roles?: string[];
  description: string;
  technologies: string[];
}

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, isActive, onClick }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className={`group flex items-center py-3 ${
        isActive ? "text-white" : "text-gray-500"
      }`}
    >
      <span
        className={`mr-4 h-px transition-all ${
          isActive
            ? "w-16 bg-white"
            : "w-8 bg-gray-600 group-hover:w-16 group-hover:bg-gray-300"
        }`}
      />
      <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white">
        {label}
      </span>
    </button>
  </li>
);

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  isEmail = false,
}) => (
  <li className="mr-5 text-xs">
    <a
      className="block hover:text-gray-300"
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
    >
      <Icon className="h-6 w-6" />
    </a>
  </li>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300 lg:sr-only">
      {title}
    </h2>
  </div>
);

const TechTag: React.FC<TechTagProps> = ({ tech }) => (
  <li className="mr-1.5 mt-2">
    <div className="flex items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10 px-3 py-1 text-xs font-medium leading-5 text-white">
      {tech}
    </div>
  </li>
);

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  title,
  company,
  roles = [],
  description,
  technologies,
}) => (
  <li className="mb-12">
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
        {period}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-white">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-white hover:text-purple-500 focus-visible:text-purple-500 group/link text-base"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title} • {company}
              </span>
              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </a>
          </div>
          {roles.map((role, index) => (
            <div key={index} className="text-gray-500" aria-hidden="true">
              {role}
            </div>
          ))}
        </h3>

        <p className="mt-2 text-sm leading-normal text-gray-300">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech, index) => (
            <TechTag key={index} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  image,
  link,
}) => (
  <li className="mb-12">
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-purple-500 focus-visible:text-purple-500 group/link text-base"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>{title}</span>
            <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </a>
        </h3>

        <p className="mt-2 text-sm leading-normal text-gray-300">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech, index) => (
            <TechTag key={index} tech={tech} />
          ))}
        </ul>
      </div>

      <img
        alt={title}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        className="rounded border-2 border-white/0 transition group-hover:border-white/50 sm:order-1 sm:col-span-2 sm:translate-y-1"
        src={image}
      />
    </div>
  </li>
);

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  href,
  children,
}) => (
  <a
    className="inline-flex items-center font-medium leading-tight text-white group"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <span>
      <span className="border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none">
        {children}
      </span>
      <span className="whitespace-nowrap">
        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
      </span>
    </span>
  </a>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  const socialLinks = [
    { href: "https://github.com/KorewaWatchful", icon: Github },
    { href: "gamidmuratbekov@gmail.com", icon: Mail, isEmail: true },
  ];

  const experiences = [
    {
      period: "2022 — 2025",
      title: "Full Stack Software Engineer",
      company: "UBIF Patriot, Inc",
      description:
        "Designed and built a full-stack repair technician platform from scratch, featuring a C++ backend with asynchronous REST APIs, real-time WebSocket metrics, and concurrent caching for high-throughput performance. Architected a PostgreSQL schema and backend functionality to support granular device diagnostics and business operations such as part ordering, inventory management, and administrative control. Deployed the backend to an in-house Linux server and set up CI pipelines for seamless delivery of the SvelteKit + Tauri desktop app to 100+ repair technicians, boosting diagnostic efficiency by 40%.",
      technologies: [
        "C++",
        "TypeScript",
        "PostgreSQL",
        "REST API",
        "Concurrency",
        "SvelteKit",
        "Vite.js",
        "Back-End Design",
        "Linux Server Administration",
        "CI/CD",
        "GitHub Actions",
      ],
    },
  ];

  const projects = [
    {
      title: "Vita3k - A PlayStation Vita Emulator",
      description:
        "Core maintainer on the first experimental open-source PlayStation Vita emulator. Developed various staple features such as PKG decryption and game installation, input remapping and I/O improvements for linux compatibility. Currently working on decoupling the GUI from the emulator core and introducing a fresher Qt6 based GUI.",
      technologies: [
        "C++",
        "Cross-Platform Development",
        "GPU emulation",
        "GUI",
        "PKG Decryption",
        "Button Remapping",
        "Qt6",
      ],
      image:
        "https://raw.githubusercontent.com/Vita3K/Vita3K/refs/heads/master/data/image/icon.png",
      link: "https://vita3k.org/",
    },
    {
      title: "Sugari - iOS & Android Diabetes Management App",
      description:
        "Building a personalized digital health assistant for helping users with diebetes manage their blood sugar levels. Adding in AI-driven analysis and seamless bluetooth integration with various blood glucose monitors.",
      technologies: [
        "TypeScript",
        "React",
        "React-Native",
        "Expo Go",
        "AI Integration",
        "Mobile Development",
        "SQLite",
      ],
      image:
        "https://raw.githubusercontent.com/DarkSyed/sugari/refs/heads/main/assets/icon.png",
      link: "https://github.com/DarkSyed/sugari",
    },
    {
      title: "Chaya - Stealth Startup",
      description:
        "Full-Stack developer for a UNC-based startup, focusing on implementing inventory management and ordering automation with plans for advanced AI analysis.",
      technologies: [
        "Python",
        "Flask",
        "TypeScript",
        "WebDriver",
        "Selenium/Playwright",
        "AI",
      ],
      image: "/chaya.png",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <ParticlesBackground />
      <div className="lg:flex">
        <div className="lg:fixed lg:inset-y-0 lg:left-50 lg:w-1/2 lg:max-w-lg xl:max-w-xl">
          <div className="flex h-full flex-col justify-between p-8 lg:p-12 xl:p-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Gamid Muratbekov
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-300 sm:text-xl">
                Full-Stack Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-gray-400">
                Building performant applications, while thinking about the best
                user experience.
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {navigationItems.map((item) => (
                    <NavItem
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      isActive={activeSection === item.id}
                      onClick={scrollToSection}
                    />
                  ))}
                </ul>
              </nav>
            </div>

            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  isEmail={link.isEmail}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:ml-250 lg:w-1/2 lg:max-w-lg xl:max-w-xl">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-6 lg:py-0">
            <div className="lg:py-24">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <SectionHeader title="About" />
                <div>
                  <p className="mb-4 text-white font-medium leading-relaxed">
                    I've been drawn to computers for as long as I can remember,
                    not just using them, but pulling them apart, breaking
                    things, and figuring out how to put them back together. I
                    grew up in Moscow, where I spent my early teens writing
                    scripts to automate games and poking around Linux just to
                    see what I could get away with. Over time, that curiosity
                    turned into a deeper obsession with systems programming,
                    backend architecture, and building tools that actually make
                    people's lives easier.
                  </p>
                  <p className="mb-4 text-white font-medium leading-relaxed">
                    After moving to the U.S., I studied Computer Science at
                    UConn and recently built a full-stack repair technician
                    platform at UBIF Patriot, from a speedy C++ backend with
                    real-time repair metrics and task delegation, to a sleek
                    SvelteKit desktop app now used daily by over 100 employees.
                    Alongside work, I contribute to open-source projects, and
                    spend time building my own tools and apps, anything that
                    scratches a technical itch or improves some corner of my
                    workflow.
                  </p>
                  <p className="text-white font-medium leading-relaxed">
                    Outside of code, I've been expanding my music taste and
                    recently got hooked on old melodic trance tracks. When I'm
                    not chasing new playlists, I'm either hitting the gym or
                    grinding the ranked ladder in whatever the current
                    flavor-of-the-month tac shooter is.
                  </p>
                </div>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <SectionHeader title="Experience" />
                <div>
                  <ol className="group/list">
                    {experiences.map((experience, index) => (
                      <ExperienceItem key={index} {...experience} />
                    ))}
                  </ol>
                  <div className="mt-12">
                    <ExternalLinkButton href="/Resume.pdf">
                      View Resume
                    </ExternalLinkButton>
                  </div>
                </div>
              </section>

              <section
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <SectionHeader title="Projects" />
                <div>
                  <ul className="group/list">
                    {projects.map((project, index) => (
                      <ProjectItem key={index} {...project} />
                    ))}
                  </ul>
                  <div className="mt-12"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
