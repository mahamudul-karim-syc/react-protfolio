import logo from "./assets/logo.jpeg";
import about from "./assets/about.jpeg";
import profile from "./assets/profile.png";
import { useState } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaPython,
  FaFacebookF,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

// ======================================================
// SKILLS DATA
// ======================================================

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    description: "Creating semantic, accessible and well-structured web pages.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-400",
    description:
      "Designing responsive, modern and visually appealing interfaces.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    description:
      "Writing modern, efficient and maintainable JavaScript for web applications.",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    description:
      "Building fast, interactive and reusable component-based user interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    description:
      "Creating responsive and clean layouts using utility-first CSS.",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "text-cyan-400",
    description:
      "Building backend applications, automation scripts and efficient solutions with Python.",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi />,
    color: "text-emerald-400",
    description:
      "Developing high-performance REST APIs using Python and FastAPI.",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
    description:
      "Managing relational databases and writing efficient SQL queries for application data.",
  },

  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-400",
    description:
      "Working with powerful relational databases, SQL queries and structured application data.",
  },
];

// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    title: "Housing Management System",
    description:
      "A full-stack platform for browsing rooms, roommate management, reservations, payments and authentication.",
    technologies: [
      {
        name: "React",
        className: "bg-cyan-500/10 text-cyan-400",
      },
      {
        name: "FastAPI",
        className: "bg-green-500/10 text-green-400",
      },
      {
        name: "PostgreSQL",
        className: "bg-purple-500/10 text-purple-400",
      },
    ],
    live: "https://stunning-gingersnap-1a9a2d.netlify.app",
    github:
      "https://github.com/mahamudul-karim-syc/Housing-Roommate-Management-system",
  },

  {
    title: "E-Commerce Store",
    description:
      "A modern e-commerce application with product browsing, authentication, cart management and responsive UI.",
    technologies: [
      {
        name: "HTML",
        className: "bg-orange-500/10 text-orange-400",
      },
      {
        name: "CSS",
        className: "bg-blue-500/10 text-blue-400",
      },
      {
        name: "JavaScript",
        className: "bg-yellow-500/10 text-yellow-400",
      },
    ],
    live: "https://papaya-douhua-5bb188.netlify.app",
    github: "https://github.com/mahamudul-karim-syc/Assignment-02",
  },

  {
    title: "Protfolio Web Site",
    description:
      "A complete library management platform with authentication, book management, reservations and role-based access.",
    technologies: [
      {
        name: "React",
        className: "bg-cyan-500/10 text-cyan-400",
      },
      {
        name: "FastAPI",
        className: "bg-green-500/10 text-green-400",
      },
      {
        name: "PostgreSQL",
        className: "bg-purple-500/10 text-purple-400",
      },
    ],

    live: "#",
    github: "#",
  },
];

// ======================================================
// SECTION TITLE
// ======================================================

const SectionTitle = ({ title, highlight, description }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-[#1597ff] to-pink-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

// ======================================================
// SKILL CARD
// ======================================================

const SkillCard = ({ skill }) => {
  return (
    <div className="group rounded-2xl border border-[#263858] bg-[#111f3b]/80 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#1597ff] hover:shadow-[0_15px_50px_rgba(21,151,255,0.12)]">
      <div
        className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0b1730] text-5xl ${skill.color} transition duration-300 group-hover:scale-110`}
      >
        {skill.icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>

      <p className="mt-4 text-sm leading-6 text-gray-400">
        {skill.description}
      </p>
    </div>
  );
};

// ======================================================
// PROJECT CARD
// ======================================================

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#263858] bg-[#111f3b]/80 transition duration-300 hover:-translate-y-2 hover:border-[#1597ff] hover:shadow-[0_15px_50px_rgba(21,151,255,0.12)]">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology.name}
              className={`rounded-full px-3 py-1 text-xs font-medium ${technology.className}`}
            >
              {technology.name}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1597ff] to-pink-500 px-4 py-2 text-xs font-semibold transition hover:scale-105"
          >
            Live Demo
            <FaExternalLinkAlt size={10} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#1597ff] px-4 py-2 text-xs font-semibold text-[#1597ff] transition hover:bg-[#1597ff] hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// ======================================================
// PORTFOLIO
// ======================================================

const Protfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0b1730] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* ==================================================
                          NAVBAR
      ================================================== */}

      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          darkMode
            ? "border-[#263858] bg-[#0b1730]/95"
            : "border-gray-200 bg-white/95"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="text-base font-bold sm:text-lg md:text-xl"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-6 lg:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm transition hover:text-[#1597ff]"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Desktop Right */}

          <div className="hidden items-center gap-3 md:flex">
            {/* Dark Mode */}

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                darkMode
                  ? "border-[#33466c] text-yellow-400 hover:border-yellow-400"
                  : "border-gray-300 text-gray-700 hover:border-[#1597ff]"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Hire */}

            <a
              href="#contact"
              className="rounded-full border border-[#1597ff] bg-gradient-to-r from-[#1597ff]/20 to-pink-500/20 px-5 py-2 text-sm font-medium transition hover:scale-105 hover:border-pink-400"
            >
              ✦ Hire Me
            </a>
          </div>

          {/* Mobile Controls */}

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#33466c]"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#33466c]"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className={`border-t px-5 py-5 md:hidden ${
              darkMode
                ? "border-[#263858] bg-[#0b1730]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={closeMenu}
                  className="border-b border-gray-700/30 pb-3 text-sm transition hover:text-[#1597ff]"
                >
                  {name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-1 rounded-full bg-gradient-to-r from-[#1597ff] to-pink-500 px-5 py-3 text-center text-sm font-semibold"
              >
                ✦ Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

 {/* ================= Hero ================= */}
      <section
        id="home"
        className="relative overflow-hidden pt-16"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 md:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center md:text-left">

            <p className="mb-3 text-base font-medium text-pink-400 sm:text-lg">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I'm
            </h1>

            <h2 className="mt-2 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-[#1597ff]">Mahamudul</span>{" "}
              <span className="text-pink-400">Karim</span>
            </h2>

            <h3 className="mt-5 text-lg font-semibold text-gray-300 sm:text-xl">
               <span className="text-[#1597ff]">Full</span>{" "}
              <span className="text-purple-400">Stack</span>{" "}
              <span className="text-pink-400">Developer</span>
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:mx-0">
              I build scalable full-stack applications using React, Node.js,
              Express and MongoDB. I love clean code, responsive design and
              fast user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#1597ff] to-pink-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:scale-105"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#1597ff] px-6 py-3 text-sm font-semibold text-[#1597ff] transition hover:bg-[#1597ff] hover:text-white"
              >
                Let's Collaborate ↗
              </a>

            </div>

            {/* Social */}
            <div className="mt-8 flex justify-center gap-4 md:justify-start">

              <a
                href="https://github.com/mahamudul-karim-syc"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 transition hover:border-[#1597ff] hover:text-[#1597ff]"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/md-mahamudul-karim-97651a380"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 transition hover:border-[#1597ff] hover:text-[#1597ff]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 transition hover:border-[#1597ff] hover:text-[#1597ff]"
              >
                <FaFacebookF />
              </a>

            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT PROFILE + SKILLS ORBIT                     */}
          {/* ================================================= */}

          <div className="relative flex min-h-[500px] items-center justify-center sm:min-h-[580px] lg:min-h-[620px]">

            {/* Outer Glow */}
            <div className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[90px] sm:h-[500px] sm:w-[500px]" />

            {/* ================= OUTER ORBIT ================= */}
            <div
              className="
                absolute
                h-[360px] w-[360px]
                rounded-full
                border border-[#1597ff]/50
                animate-[spin_30s_linear_infinite]
                sm:h-[500px] sm:w-[500px]
              "
            />

            {/* ================= INNER ORBIT ================= */}
            <div
              className="
                absolute
                h-[290px] w-[290px]
                rounded-full
                border border-dashed border-cyan-400/40
                animate-[spin_20s_linear_infinite_reverse]
                sm:h-[390px] sm:w-[390px]
              "
            />

            {/* ================= PROFILE ================= */}
            <div className="relative z-20">

              {/* Profile Glow */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-[#1597ff] via-purple-500 to-pink-500 opacity-70 blur-xl" />

              {/* Profile Ring */}
              <div className="relative h-56 w-56 rounded-full bg-gradient-to-r from-[#1597ff] via-purple-500 to-pink-500 p-[5px] shadow-[0_0_70px_rgba(21,151,255,0.55)] sm:h-72 sm:w-72">

                <div className="h-full w-full overflow-hidden rounded-full border-[5px] border-[#0b1730] bg-[#0b1730]">

                  <img
                    src={profile}
                    alt="Mahamudul Karim"
                    className="h-full w-full object-cover"
                  />

                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* SKILLS ORBIT */}
            {/* ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                animate-[spin_30s_linear_infinite]
                sm:h-[500px]
                sm:w-[500px]
              "
            >

              {/* ================= JAVASCRIPT ================= */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[-4%]
                  -translate-x-1/2
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 bg-[#102c54] shadow-[0_0_30px_rgba(250,204,21,0.6)] sm:h-16 sm:w-16">
                  <SiJavascript className="text-2xl text-yellow-400 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  JAVASCRIPT
                </span>
              </div>

              {/* ================= HTML ================= */}
              <div
                className="
                  absolute
                  left-[7%]
                  top-[18%]
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-400 bg-[#102c54] shadow-[0_0_30px_rgba(249,115,22,0.6)] sm:h-16 sm:w-16">
                  <FaHtml5 className="text-2xl text-orange-500 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  HTML
                </span>
              </div>

              {/* ================= CSS ================= */}
              <div
                className="
                  absolute
                  left-[1%]
                  top-[48%]
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-400 bg-[#102c54] shadow-[0_0_30px_rgba(96,165,250,0.6)] sm:h-16 sm:w-16">
                  <FaCss3Alt className="text-2xl text-blue-400 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  CSS
                </span>
              </div>

              {/* ================= REACT ================= */}
              <div
                className="
                  absolute
                  right-[7%]
                  top-[18%]
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#102c54] shadow-[0_0_30px_rgba(34,211,238,0.6)] sm:h-16 sm:w-16">
                  <FaReact className="text-2xl text-[#61dafb] sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  REACT
                </span>
              </div>

              {/* ================= NODE JS ================= */}
              <div
                className="
                  absolute
                  right-[1%]
                  top-[48%]
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-400 bg-[#102c54] shadow-[0_0_30px_rgba(74,222,128,0.6)] sm:h-16 sm:w-16">
                  <FaNodeJs className="text-2xl text-green-400 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  NODE.JS
                </span>
              </div>

              {/* ================= FASTAPI ================= */}
              <div
                className="
                  absolute
                  bottom-[13%]
                  left-[10%]
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#102c54] shadow-[0_0_30px_rgba(34,211,238,0.6)] sm:h-16 sm:w-16">
                  <SiFastapi className="text-2xl text-cyan-300 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  FASTAPI
                </span>
              </div>

              {/* ================= PYTHON ================= */}
              <div
                className="
                  absolute
                  bottom-[3%]
                  left-1/2
                  -translate-x-1/2
                  flex
                  flex-col
                  items-center
                  animate-[spin_30s_linear_infinite_reverse]
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 bg-[#102c54] shadow-[0_0_30px_rgba(250,204,21,0.6)] sm:h-16 sm:w-16">
                  <FaPython className="text-2xl text-yellow-400 sm:text-3xl" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-widest text-white sm:text-xs">
                  PYTHON
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
                            ABOUT
      ================================================== */}

      <section
        id="about"
        className={`px-5 py-20 sm:px-6 ${
          darkMode ? "bg-gradient-to-r from-[#17284b] to-[#241d35]" : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Image */}

          <div className="flex justify-center">
            <div className="h-[350px] w-full max-w-[365px] overflow-hidden rounded-2xl bg-black shadow-2xl sm:h-[390px]">
              <img
                src={about}
                alt="About Mahamudul Karim"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}

          <div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-pink-300"> About</span>
              <span className="text-[#1597ff]">Me</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
              I am a MERN Stack Web Developer focusing on building
              production-ready applications, designing APIs, creating
              interactive user interfaces and optimizing performance to deliver
              smooth user experiences.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Along with strong problem-solving skills, I follow clean
              architecture principles and modern development patterns. I'm
              passionate about writing maintainable code and building
              applications that feel fast, secure and intuitive.
            </p>

            <a
              href="/resume.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1597ff] to-pink-500 px-6 py-3 text-sm font-semibold shadow-lg transition hover:scale-105"
            >
              Download Resume
              <span>⇩</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
                           SKILLS
      ================================================== */}

      <section
        id="skills"
        className={`px-5 py-20 sm:px-6 ${
          darkMode ? "bg-[#0b1730]" : "bg-gray-100"
        }`}
      >
        <SectionTitle
          highlight="Skills & Technologies"
          description="I work with modern tools and technologies to build fast, scalable and efficient web applications."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* ==================================================
                          PROJECTS
      ================================================== */}

      <section
        id="projects"
        className={`px-5 py-20 sm:px-6 ${
          darkMode ? "bg-[#0b1730]" : "bg-gray-100"
        }`}
      >
        <SectionTitle
          
          highlight="Recent Projects"
          description="A selection of projects I've built using modern technologies and clean development practices."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ==================================================
                         EDUCATION
      ================================================== */}
      <section
        id="education"
        className={`px-5 py-20 sm:px-6 ${
          darkMode ? "bg-[#0b1730]" : "bg-gray-100"
        }`}
      >
        {/* Heading */}
        
        <SectionTitle
          highlight=" Qualification"
          description=" My educational journey"
        />

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#33466c] md:block"></div>

            {/* ==================================================
          EDUCATION 01
      ================================================== */}

            <div className="relative mb-20 grid items-center md:grid-cols-2 md:gap-20">
              {/* Left Card */}
              <div
                className={`rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-[#263858] bg-[#111f3b]/80"
                    : "border-gray-300 bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">
                  Anwara Polytechnic Institute
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Department of Computer Science and Technology
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  Diploma in Engineering
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#0b1730] bg-[#1597ff] text-white shadow-lg shadow-blue-500/30 md:flex">
                <FaGraduationCap />
              </div>

              {/* Right Details */}
              <div className="mt-6 md:mt-0 md:pl-4">
                <p className="text-sm font-medium text-[#1597ff]">
                  2022 - Present
                </p>

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Diploma in Engineering
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Computer Science & Technology
                </p>
              </div>
            </div>

            {/* ==================================================
          EDUCATION 02
      ================================================== */}

            <div className="relative grid items-center md:grid-cols-2 md:gap-20">
              {/* Left Details */}
              <div className="order-2 mt-6 md:order-1 md:mt-0 md:pr-4 md:text-right">
                <p className="text-sm font-medium text-pink-400">
                  Secondary Level
                </p>

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Secondary School Certificate
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Madrasa Education
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#0b1730] bg-pink-500 text-white shadow-lg shadow-pink-500/30 md:flex">
                <FaGraduationCap />
              </div>

              {/* Right Card */}
              <div
                className={`order-1 rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 md:order-2 ${
                  darkMode
                    ? "border-[#263858] bg-[#111f3b]/80"
                    : "border-gray-300 bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">
                  Okra Rahamaniya Dakil Madrasha
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Science Group
                </p>

                <p className="mt-3 text-xs text-gray-500">Dakil</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================
                          CONTACT
      ================================================== */}

      <section
        id="contact"
        className={`px-5 py-20 sm:px-6 ${
          darkMode ? "bg-[#0b1730]" : "bg-gray-100"
        }`}
      >
        <SectionTitle
          highlight="ContactMe"
          description="Let's build something amazing together."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Contact Information */}

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Let's connect today</h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              Have a project in mind or want to discuss an opportunity? Feel
              free to reach out. I'm always open to discussing new projects,
              ideas and opportunities.
            </p>

            {/* Email */}

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597ff]/10 text-[#1597ff]">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs text-gray-500">Email</p>

                <a
                  href="mailto:mahamudulkarim@gmail.com"
                  className="text-sm transition hover:text-[#1597ff]"
                >
                  mahamudulkarim@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597ff]/10 text-[#1597ff]">
                <FaPhone />
              </div>

              <div>
                <p className="text-xs text-gray-500">Phone</p>

                <a
                  href="tel:+8801516511053"
                  className="text-sm transition hover:text-[#1597ff]"
                >
                  +880 1516511053
                </a>
              </div>
            </div>

            {/* Location */}

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597ff]/10 text-[#1597ff]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs text-gray-500">Location</p>

                <p className="text-sm">Dhaka , Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div
            className={`rounded-2xl border p-6 shadow-xl sm:p-8 ${
              darkMode
                ? "border-[#263858] bg-[#111f3b]/80"
                : "border-gray-200 bg-white"
            }`}
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();

                alert("Thank you! Your message has been submitted.");
              }}
              className="space-y-5"
            >
              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-gray-400">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-[#33466c] bg-[#0b1730] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#1597ff]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-gray-400">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-lg border border-[#33466c] bg-[#0b1730] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#1597ff]"
                  />
                </div>
              </div>

              {/* Subject + Phone */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-gray-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project subject"
                    required
                    className="w-full rounded-lg border border-[#33466c] bg-[#0b1730] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#1597ff]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-gray-400">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+880..."
                    className="w-full rounded-lg border border-[#33466c] bg-[#0b1730] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#1597ff]"
                  />
                </div>
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-xs text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-[#33466c] bg-[#0b1730] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#1597ff]"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#1597ff] to-pink-500 px-6 py-3 text-sm font-semibold shadow-lg transition hover:scale-[1.02]"
              >
                Send Message ↗
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
                           FOOTER
      ================================================== */}

      <footer
        className={`border-t px-5 pt-12 sm:px-6 ${
          darkMode
            ? "border-[#263858] bg-[#081329]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 pb-10 md:flex-row">
            {/* Logo */}

            <a href="#home" className="text-2xl font-bold sm:text-3xl">
              <span className="text-[#1597ff]">Full</span>{" "}
              <span className="text-purple-400">Stack</span>{" "}
              <span className="text-pink-400">Developer</span>
            </a>

            {/* Navigation */}

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <a href="#home" className="transition hover:text-[#1597ff]">
                Home
              </a>

              <a href="#about" className="transition hover:text-[#1597ff]">
                About
              </a>

              <a href="#skills" className="transition hover:text-[#1597ff]">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-[#1597ff]">
                Projects
              </a>

              <a href="#education" className="transition hover:text-[#1597ff]">
                Education
              </a>

              <a href="#contact" className="transition hover:text-[#1597ff]">
                Contact
              </a>
            </div>

            {/* Social */}

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mahamudul-karim-syc"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1597ff] text-lg transition hover:-translate-y-1 hover:bg-pink-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1597ff] text-lg transition hover:-translate-y-1 hover:bg-pink-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1597ff] text-lg font-bold transition hover:-translate-y-1 hover:bg-pink-500"
              >
                f
              </a>
            </div>
          </div>

          {/* Gradient Line */}

          <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-[#1597ff] to-pink-500" />
        </div>
      </footer>
    </div>
  );
};

export default Protfolio;
