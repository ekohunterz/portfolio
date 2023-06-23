import React from "react";

const ProjectItem = ({ imageSrc, altText, title, description, technologies, demoLink, githubLink }) => {
  return (
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="lg:w-2/5 h-auto  rounded overflow-hidden shadow-md">
      <img className="object-cover h-60" src={imageSrc} alt={altText} />
      <div className="bg-secondary">
        <h3 className="font-bold text-primary text-xl px-6 py-5">{title}</h3>
      </div>
      <div className="bg-white h-full px-6 py-4 overflow-hidden">
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex flex-wrap py-2 gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-200 rounded-full p-2 inline-block text-sm text-gray-700">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex py-2 gap-x-2">
          <a href={demoLink} target="_blank" className="bg-black rounded-md p-2 inline-block text-md text-white hover:scale-105 hover:opacity-70">
            <i className="fas fa-eye" style={{ color: "#ffffff" }} /> Demo
          </a>
          <a href={githubLink} target="_blank" className="bg-black rounded-md p-2 inline-block text-md text-white hover:scale-105 hover:opacity-70">
            <i className="fab fa-github" style={{ color: "#ffffff" }} /> Github
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      imageSrc: "quran.png",
      altText: "Quran",
      title: "Al-Quran Online",
      description: "Aplikasi ini dibuat menggunakan ReactJS dengan mengkonsumsi API dari Kemenag. Selain itu terdapat pula fitur Jadwal Shalat dari berbagai Kota di Indonesia.",
      technologies: ["ReactJS", "Vite", "Bootstrap 5"],
      demoLink: "https://quran-react-eko.vercel.app/",
      githubLink: "https://github.com/ekohunterz/Qur-an-react",
    },
    {
      imageSrc: "absen-CI.png",
      altText: "absen-CI",
      title: "Absensi Siswa SMK (Codeigniter 3)",
      description: "Aplikasi ketika pertama kali mempelajari framework PHP, yaitu Codeigniter 3 aplikasi ini bertujuan untuk membantu pengelolaan absensi siswa secara efektif dan efisien.",
      technologies: ["PHP", "MySQL", "Codeigniter 3", "jQuery", "Bootstrap 5"],
      demoLink: "https://youtu.be/y96xhdyrXFE",
      githubLink: "https://github.com/ekohunterz/absen_siswa-CI3",
    },
    {
      imageSrc: "absen-laravel.png",
      altText: "absen-laravel",
      title: "Absensi Siswa SMK (Laravel 10)",
      description: "Aplikasi ini sama seperti project sebelumnya namun dibangun menggunakan Laravel 10. Yang mana pada project ini terdapat perbaikan dan penambahan fitur.",
      technologies: ["PHP", "MySQL", "Laravel", "Bootstrap 5"],
      demoLink: "",
      githubLink: "https://github.com/ekohunterz/absensi-siswa-laravel",
    },
  ];

  return (
    <>
      <section id="project" className="bg-primary min-h-screen pb-10">
        <div className="container">
          <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="font-bold text-white text-4xl text-center pt-20">
            <i className="fas fa-laptop-code" /> Project <span className="text-secondary">Made</span>
          </h1>
          <div className="flex flex-wrap mt-10 justify-center gap-6">
            {projects.map((project, index) => (
              <ProjectItem key={index} imageSrc={project.imageSrc} altText={project.altText} title={project.title} description={project.description} technologies={project.technologies} demoLink={project.demoLink} githubLink={project.githubLink} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
